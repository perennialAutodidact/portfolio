import * as d3 from "d3";
import chroma from "chroma-js";
import {
  CoreFeeling,
  CoreFeelingDatum,
  ColorHSL,
  FeelingsWheel,
  LeafFeeling,
  LeafFeelingDatum,
  SecondaryFeeling,
  SecondaryFeelingDatum,
  SecondaryFeelingDatumWithLeaves,
} from "@/ts/Feeling";
import { Fragment } from "react";
import { ShapeRenderer } from "@/app/components/ShapeRenderer";
import { feelingsWheel } from "./feelings";

const generateDistinctColors = (count: number): string[] => {
  const colors: string[] = [];
  const saturation = 60;
  const lightness = 30;

  for (let i = 0; i < count; i++) {
    const hue = Math.round((360 / count) * i);
    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    colors.push(d3.color(hsl)!.formatHex());
  }

  return colors;
};

const generateLabels = <T extends { name: string }>(
  feelingsPie: d3.PieArcDatum<T>[],
  feelingsArc: d3.Arc<any, d3.PieArcDatum<T>>,
  radius: number,
) => {
  const getLabelAngleDegrees = (feeling: d3.PieArcDatum<T>) => {
    const [x, y] = feelingsArc.centroid(feeling);
    const angle = (feeling.startAngle + feeling.endAngle) / 2;
    let degrees = (angle * 180) / Math.PI;
    return degrees;
  };
  const getQuadrant = (degrees: number) => {
    if (degrees >= 0 && degrees < 90) return 1;
    else if (degrees >= 90 && degrees < 180) return 2;
    else if (degrees >= 180 && degrees < 270) return 3;
    else if (degrees >= 270 && degrees < 360) return 4;
  };

  const labels = feelingsPie.map((slice, i, slices) => {
    let degrees = getLabelAngleDegrees(slice);
    const quadrant = getQuadrant(degrees);
    const [x, y] = feelingsArc.centroid(slice);
    let textAnchor = "start";
    let labelX = x;
    let labelY = y;
    let rotation = degrees;
    const labelFontSize = radius;

    // rotate text to radiate from center
    rotation -= 90;
    // flip half the labels for readability
    if (quadrant === 3 || quadrant === 4) {
      rotation -= 180;
      textAnchor = "end";
    }

    const style = {
      fill: "#333",
      fontSize: `${labelFontSize}px`,
      fontWeight: "400",
    };

    return (
      <text
        key={slice.data.name}
        alignmentBaseline={"middle"}
        style={style}
        textAnchor="middle"
        transform={`translate(${labelX}, ${labelY}) rotate(${rotation})`}
      >
        {slice.data.name}
      </text>
    );
  });
  return labels;
};

const formatHSLString = ({ h, s, l }: ColorHSL) =>
  `hsl(${h}, ${s * 100}%, ${l * 100}%`;

const getSVGMarginFromBreakpoint = (breakpoint: string) => {
  let top = 30,
    right = 5,
    bottom = 30,
    left = 5;
  if (!["sm", "md"].includes(breakpoint)) {
    right = 20;
    left = 20;
  }

  return { top, left, bottom, right };
};

const coreFeelingsData: CoreFeelingDatum[] = Object.entries(feelingsWheel).map(
  ([key, feeling]: [string, CoreFeeling]): CoreFeelingDatum => {
    const rawSecondaryFeelingsData = feeling.secondaryFeelings.flatMap(
      (secondaryFeeling, i) => {
        const [h2, s2, l2] = chroma(feeling.baseColor).darken(0.8).hsl();
        return {
          color: { h: h2, s: s2, l: l2 },
          name: secondaryFeeling.name,
          angle:
            360 /
            feeling.secondaryFeelings.length /
            (secondaryFeeling.leafFeelings?.length ?? 1),
          leafFeelings: secondaryFeeling.leafFeelings,
        };
      },
    );

    const secondaryFeelingsPie = d3
      .pie<SecondaryFeelingDatum>()
      .value((d) => d.angle)(rawSecondaryFeelingsData);

    const secondaryFeelingsPieWithLeaves: d3.PieArcDatum<SecondaryFeelingDatumWithLeaves>[] =
      secondaryFeelingsPie.map((slice) => {
        const { data: secondaryDatum } = slice;

        const leafFeelingsData: LeafFeelingDatum[] =
          secondaryDatum.leafFeelings.map((leafFeeling) => {
            const [h3, s3, l3] = chroma(secondaryDatum.color).darken(0.8).hsl();

            return {
              color: { h: h3, s: s3, l: l3 },
              name: leafFeeling.name,
              angle: 360 / secondaryDatum.leafFeelings.length,
            };
          });

        const leafFeelingsPie = d3
          .pie<LeafFeelingDatum>()
          .value((d) => d.angle)(leafFeelingsData);

        return {
          ...slice,
          data: {
            ...slice.data,
            leafFeelingsPie,
          },
        };
      });

    return {
      color: feeling.baseColor,
      angle: 360 / Object.keys(feelingsWheel).length,
      name: feeling.name,
      secondaryFeelingsPie: secondaryFeelingsPieWithLeaves,
    };
  },
);

const getFeelingPaths = (
  coreFeelingsPie: d3.PieArcDatum<CoreFeelingDatum>[],
  options: {
    fontScale: d3.ScaleLinear<number, number, never>;
    radii: { core: number; secondary: number; leaf: number };
  },
) => {
  const { radii, fontScale } = options;
  const squarePath = "M 10 10 H 110 V 110 H 10 V 110";
  const coreFeelingsArc = d3
    .arc<d3.PieArcDatum<CoreFeelingDatum>>()
    .innerRadius(0)
    .outerRadius(radii.core);

  const secondaryFeelingsArc = d3
    .arc<d3.PieArcDatum<SecondaryFeelingDatumWithLeaves>>()
    .innerRadius(radii.core)
    .outerRadius(radii.secondary);

  const leafFeelingsArc = d3
    .arc<d3.PieArcDatum<LeafFeelingDatum>>()
    .innerRadius(radii.secondary)
    .outerRadius(radii.leaf);

  const labels = generateLabels(
    coreFeelingsPie,
    coreFeelingsArc,
    fontScale(radii.core),
  );

  const paths = coreFeelingsPie.flatMap((coreSlice) => {
    const coreArcPaths = coreFeelingsArc(coreSlice);
    const angleRange = coreSlice.endAngle - coreSlice.startAngle;

    const secondaryFeelingsPieWithAngleOffsets =
      coreSlice.data.secondaryFeelingsPie.map((secondaryFeelingSlice, i) => {
        const subStart =
          coreSlice.startAngle +
          (secondaryFeelingSlice.startAngle / (2 * Math.PI)) * angleRange;
        const subEnd =
          coreSlice.startAngle +
          (secondaryFeelingSlice.endAngle / (2 * Math.PI)) * angleRange;

        return {
          ...secondaryFeelingSlice,
          startAngle: subStart,
          endAngle: subEnd,
        };
      });

    const secondaryFeelingsPaths = secondaryFeelingsPieWithAngleOffsets.flatMap(
      (secondaryFeelingSlice) => {
        const secondaryFeelingPath = secondaryFeelingsArc(
          secondaryFeelingSlice,
        );
        const secondaryFeelingsLabels = generateLabels(
          secondaryFeelingsPieWithAngleOffsets,
          secondaryFeelingsArc,
          fontScale(radii.secondary),
        );

        const leafFeelingsWithAngleOffsets =
          secondaryFeelingSlice.data.leafFeelingsPie.map((leafFeelingSlice) => {
            const secondaryAngleRange =
              secondaryFeelingSlice.endAngle - secondaryFeelingSlice.startAngle;
            const leafStart =
              secondaryFeelingSlice.startAngle +
              (leafFeelingSlice.startAngle / (2 * Math.PI)) *
                secondaryAngleRange;

            const leafEnd =
              secondaryFeelingSlice.startAngle +
              (leafFeelingSlice.endAngle / (2 * Math.PI)) * secondaryAngleRange;

            return {
              ...leafFeelingSlice,
              startAngle: leafStart,
              endAngle: leafEnd,
            };
          });

        const leafFeelingPaths = leafFeelingsWithAngleOffsets.map(
          (leafFeelingSlice, index) => {
            // const leafFeelingPath =
            //   index === 0 ? squarePath : leafFeelingsArc(leafFeelingSlice);
            const leafFeelingPath = leafFeelingsArc(leafFeelingSlice);
            const leafFeelingLabels = generateLabels(
              leafFeelingsWithAngleOffsets,
              leafFeelingsArc,
              fontScale(radii.leaf),
            );

            return (
              leafFeelingPath && (
                <Fragment key={leafFeelingSlice.data.name}>
                  <ShapeRenderer
                    key={`${coreSlice.data.name}-${secondaryFeelingSlice.data.name}-${leafFeelingSlice.data.name}`}
                    path={leafFeelingPath}
                    color={formatHSLString(leafFeelingSlice.data.color)}
                  />
                  {leafFeelingLabels}
                </Fragment>
              )
            );
          },
        );

        return (
          secondaryFeelingPath && (
            <Fragment key={secondaryFeelingSlice.data.name}>
              <ShapeRenderer
                key={`${coreSlice.data.name}-${secondaryFeelingSlice.data.name}`}
                path={secondaryFeelingPath}
                color={formatHSLString(secondaryFeelingSlice.data.color)}
              />
              {leafFeelingPaths}
              {secondaryFeelingsLabels}
            </Fragment>
          )
        );
      },
    );

    return (
      coreArcPaths && (
        <Fragment key={coreSlice.data.name}>
          <ShapeRenderer
            path={coreArcPaths}
            color={formatHSLString(coreSlice.data.color)}
          />
          {secondaryFeelingsPaths}
        </Fragment>
      )
    );
  });

  return { paths, labels };
};

export {
  coreFeelingsData,
  formatHSLString,
  generateDistinctColors,
  generateLabels,
  getFeelingPaths,
  getSVGMarginFromBreakpoint,
};
