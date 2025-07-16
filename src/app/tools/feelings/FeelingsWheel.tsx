"use client";

import { Fragment, useEffect, useMemo, useRef } from "react";
import { useWindowSize } from "usehooks-ts";
import * as d3 from "d3";
import chroma from "chroma-js";
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
} from "@/ts/Feeling";
import { ShapeRenderer } from "@/app/components/ShapeRenderer";

const FeelingsWheel = () => {
  const { height = 0, width = 0 } = useWindowSize();
  const ref = useRef<SVGSVGElement | null>(null);
  const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
  const radius = Math.min(width, height) / 5 - MARGIN.top / 2;
  const data: CoreFeelingDatum[] = Object.entries(feelingsWheel)
    .map(([key, feeling]: [string, CoreFeeling]): CoreFeelingDatum => {
      const { h, s, l } = feeling.baseColor;
      return {
        color: feeling.baseColor,
        angle: 360 / Object.keys(feelingsWheel).length,
        name: feeling.name,
        secondaryFeelings: feeling.secondaryFeelings,
      };
    })
    .slice(0, 4);

  const coreFeelingsArc = d3
    .arc<d3.PieArcDatum<CoreFeelingDatum>>()
    .innerRadius(0)
    .outerRadius(radius);

  const coreFeelingsPie = useMemo(
    () => d3.pie<CoreFeelingDatum>().value((d) => d.angle)(data),
    [data],
  );

  const labels = generateLabels(coreFeelingsPie, coreFeelingsArc);
  const secondaryFeelingsArc = d3
    .arc<d3.PieArcDatum<SecondaryFeelingDatum>>()
    .innerRadius(radius)
    .outerRadius(radius * 2.5);

  const paths = coreFeelingsPie.flatMap((coreSlice) => {
    const { color, name } = coreSlice.data;

    const coreArcPaths = coreFeelingsArc(coreSlice);
    const angleRange = coreSlice.endAngle - coreSlice.startAngle;

    const secondaryFeelingsData = coreSlice.data.secondaryFeelings.flatMap(
      (secondaryFeeling, i) => {
        const [h, s, l] = chroma(coreSlice.data.color).darken(0.8).hsl();
        return {
          color: { h, s, l },
          name: secondaryFeeling.name,
          angle:
            360 /
            coreSlice.data.secondaryFeelings.length /
            (secondaryFeeling.leafFeelings?.length ?? 1),
          leafFeelings: secondaryFeeling.leafFeelings,
        };
      },
    );

    const secondaryFeelingsPie = useMemo(
      () =>
        d3.pie<SecondaryFeelingDatum>().value((d) => d.angle)(
          secondaryFeelingsData,
        ),
      [data],
    );

    // const secondaryCenterMarkers = secondaryFeelingsPie.map((slice, i) => {
    //   const degrees = (radians) => (radians * 180) / Math.PI;
    //   const [x, y] = secondaryFeelingsArc.centroid(slice);

    //   let angleDiff = slice.startAngle - slice.endAngle / 2;
    //   if (degrees(slice.endAngle) > 180) {
    //     angleDiff =
    //       slice.endAngle + slice.startAngle / 2 + coreSlice.startAngle;
    //   } else {
    //     angleDiff -= coreSlice.startAngle;
    //   }

    //   const fill = ["white", "black"][i];
    //   const style = { fill };
    //   console.log({
    //     start: degrees(slice.startAngle),
    //     end: degrees(slice.endAngle),
    //     angleDiff: degrees(angleDiff),
    //     angle: slice.data.angle,
    //     color: chroma(slice.data.color).hex(),
    //     name: slice.data.name,
    //   });
    //   const lineRadius = radius * 2.5;
    //   const [cx, cy] = d3.pointRadial(angleDiff, lineRadius);
    //   return (
    //     <circle
    //       key={slice.data.name}
    //       // cx={cx / 2}
    //       // cy={cy / 2}
    //       cx={cx}
    //       cy={cy}
    //       r={5}
    //       style={style}
    //     />
    //   );
    // });

    const secondaryArcs = secondaryFeelingsPie.map(
      (secondaryFeelingSlice, i) => {
        const subStart =
          coreSlice.startAngle +
          (secondaryFeelingSlice.startAngle / (2 * Math.PI)) * angleRange;
        const subEnd =
          coreSlice.startAngle +
          (secondaryFeelingSlice.endAngle / (2 * Math.PI)) * angleRange;
        const arcPath = secondaryFeelingsArc({
          ...secondaryFeelingSlice,
          startAngle: subStart,
          endAngle: subEnd,
        });

        const secondaryFeelingsLabels = generateLabels(
          secondaryFeelingsPie,
          secondaryFeelingsArc,
        );

        return (
          arcPath && (
            <Fragment>
              <ShapeRenderer
                key={`${name}-${secondaryFeelingSlice.data.name}`}
                path={arcPath}
                color={formatHSLString(secondaryFeelingSlice.data.color)}
              />
              {generateLabels(secondaryFeelingsPie, secondaryFeelingsArc)}
              {/* {secondaryCenterMarkers} */}
            </Fragment>
          )
        );
      },
    );

    return (
      coreArcPaths && (
        <Fragment key={name}>
          <ShapeRenderer
            path={coreArcPaths}
            color={formatHSLString(coreSlice.data.color)}
          />
          {secondaryArcs}
        </Fragment>
      )
    );
  });

  // const centroidMarkers = pie.map((slice) => {
  //   const [cx, cy] = arc.centroid(slice);
  //   const style = { fill: "#fff" };
  //   return <circle key={slice.data.name} cx={cx} cy={cy} r={5} style={style} />;
  // });

  return (
    <svg height={height} width={width} ref={ref}>
      <g transform={`translate(${width / 2}, ${height / 2})`} fill="black">
        {paths}
        {/* {labels} */}
        {/* {centroidMarkers} */}
      </g>
    </svg>
  );
};

export default FeelingsWheel;
