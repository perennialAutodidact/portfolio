"use client";

import {
  Fragment,
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { useWindowSize } from "usehooks-ts";
import * as d3 from "d3";
import chroma from "chroma-js";
import throttle from "lodash.throttle";
import { feelingsWheel } from "./feelings";
import {
  formatHSLString,
  generateDistinctColors,
  generateLabels,
} from "./helpers";
import {
  CoreFeelingDatum,
  SecondaryFeelingDatum,
  LeafFeelingDatum,
  CoreFeeling,
  CoreFeelingName,
  SecondaryFeeling,
  LeafFeeling,
  SecondaryFeelingDatumWithLeaves,
} from "@/ts/Feeling";
import { ShapeRenderer } from "@/app/components/ShapeRenderer";

const FeelingsWheel = () => {
  const { height = 0, width = 0 } = useWindowSize();
  const SVGRef = useRef<SVGSVGElement | null>(null);
  const gRef = useRef<SVGGElement | null>(null);
  const initialAngleRef = useRef<number>(0);
  const initialRotationRef = useRef<number | null>(0);
  const [wheelRotationDegrees, setWheelRotationDegrees] = useState<number>(0);
  const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
  const coreFeelingRadius = Math.min(width, height) / 6 - MARGIN.top / 2;
  const secondaryFeelingRadius = coreFeelingRadius * 2;
  const leafFeelingRadius = secondaryFeelingRadius * 1.5;
  const centerX = width / 2;
  const centerY = height / 2;

  const coreFeelingsData: CoreFeelingDatum[] = Object.entries(
    feelingsWheel,
  ).map(([key, feeling]: [string, CoreFeeling]): CoreFeelingDatum => {
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
  });
  // .slice(0, 2);

  const coreFeelingsArc = d3
    .arc<d3.PieArcDatum<CoreFeelingDatum>>()
    .innerRadius(0)
    .outerRadius(coreFeelingRadius);

  const coreFeelingsPie = useMemo(
    () => d3.pie<CoreFeelingDatum>().value((d) => d.angle)(coreFeelingsData),
    [coreFeelingsData],
  );

  const labels = generateLabels(coreFeelingsPie, coreFeelingsArc);
  const secondaryFeelingsArc = d3
    .arc<d3.PieArcDatum<SecondaryFeelingDatumWithLeaves>>()
    .innerRadius(coreFeelingRadius)
    .outerRadius(secondaryFeelingRadius);

  const leafFeelingsArc = d3
    .arc<d3.PieArcDatum<LeafFeelingDatum>>()
    .innerRadius(secondaryFeelingRadius)
    .outerRadius(leafFeelingRadius);

  const coreFeelingsPaths = coreFeelingsPie.flatMap((coreSlice) => {
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
          (leafFeelingSlice) => {
            const leafFeelingPath = leafFeelingsArc(leafFeelingSlice);
            const leafFeelingLabels = generateLabels(
              leafFeelingsWithAngleOffsets,
              leafFeelingsArc,
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

  // const handleDrag = useCallback(() => {
  //   console.log("HI");
  // }, []);

  useEffect(() => {
    if (!SVGRef.current) return;

    const throttledDrag = throttle(
      (event: d3.D3DragEvent<SVGSVGElement, unknown, unknown>) => {
        if (!SVGRef.current || initialRotationRef.current === null) return;
        const currentAngle =
          (Math.atan2(event.y - centerY, event.x - centerX) * 180) / Math.PI;
        const delta = currentAngle - initialAngleRef.current;
        const newRotation = initialRotationRef.current + delta;
        SVGRef.current.style.transform = `rotate(${newRotation}deg)`;
        setWheelRotationDegrees(newRotation);
      },
      50,
    );

    const handleDrag = d3
      .drag<SVGSVGElement, unknown>()
      .subject(function (event) {
        return d3.pointer(event, this);
      })
      .on("start", function (event) {
        console.log("drag started", event);
      })
      .on("drag", throttledDrag);
    const node = d3.select(SVGRef.current);
    node.call(handleDrag);
  }, []);

  useEffect(() => {
    if (!SVGRef.current) return;
  }, [wheelRotationDegrees]);

  return (
    <svg height={height} width={width} ref={SVGRef}>
      <g
        ref={gRef}
        transform={`translate(${width / 2}, ${height / 2})`}
        fill="black"
      >
        {coreFeelingsPaths}
        {labels}
      </g>
    </svg>
  );
};

export default FeelingsWheel;
