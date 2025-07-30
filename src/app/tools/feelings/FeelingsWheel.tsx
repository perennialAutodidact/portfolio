"use client";

import { Fragment, useMemo, useRef, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import * as d3 from "d3";
import chroma from "chroma-js";
import throttle from "lodash.throttle";
import {
  coreFeelingsData,
  formatHSLString,
  generateLabels,
  getFeelingPaths,
  getSVGMarginFromBreakpoint,
} from "./helpers";
import {
  CoreFeeling,
  CoreFeelingDatum,
  SecondaryFeelingDatum,
  LeafFeelingDatum,
  SecondaryFeelingDatumWithLeaves,
} from "@/ts/Feeling";
import { ShapeRenderer } from "@/app/components/ShapeRenderer";
import useBreakpoint from "@/hooks/useBreakpoint";

const FeelingsWheel = () => {
  const { height = 0, width = 0 } = useWindowSize();
  const breakpoint = useBreakpoint();
  const SVGRef = useRef<SVGSVGElement | null>(null);
  const gRef = useRef<SVGGElement | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartDimensions = useRef({
    height,
    width,
  });

  const MARGIN = getSVGMarginFromBreakpoint(breakpoint);
  const SVGDimensions = useMemo(
    () =>
      isDragging
        ? {
            height: Math.max(
              dragStartDimensions.current.width,
              dragStartDimensions.current.height,
            ),
            width: Math.max(
              dragStartDimensions.current.width,
              dragStartDimensions.current.height,
            ),
          }
        : {
            height: Math.max(height, width),
            width: Math.max(height, width),
          },
    [height, width],
  );
  const maxDim = Math.max(width, height);
  const minDim = Math.min(width, height);
  const offsetX = (maxDim - width) / 2;
  const offsetY = (maxDim - height) / 2;

  const coreFeelingRadius = useMemo(
    () => Math.min(width, height) / 6 - MARGIN.top / 2,
    [width, height],
  );
  const secondaryFeelingRadius = coreFeelingRadius * 2;
  const leafFeelingRadius = secondaryFeelingRadius * 1.5;

  const fontScale = useMemo(
    () => d3.scaleLinear([coreFeelingRadius, leafFeelingRadius], [17, 14]),
    [coreFeelingRadius],
  );

  // .slice(0, 2);

  const coreFeelingsPie = useMemo(
    () => d3.pie<CoreFeelingDatum>().value((d) => d.angle)(coreFeelingsData),
    [coreFeelingsData],
  );

  const { paths, labels } = getFeelingPaths(coreFeelingsPie, {
    radii: {
      core: coreFeelingRadius,
      secondary: secondaryFeelingRadius,
      leaf: leafFeelingRadius,
    },
    fontScale,
  });

  useEffect(() => {
    if (!SVGRef.current || !gRef.current) return;

    const svg = d3.select(SVGRef.current);
    const center = {
      x: SVGDimensions.width / 2,
      y: SVGDimensions.height / 2,
    };

    // track rotation across drags
    const currentRotation = { value: rotation };
    let startAngle = 0;

    const handleDragStart = (event: any) => {
      const [x, y] = d3.pointer(event, SVGRef.current);
      startAngle = Math.atan2(y - center.y, x - center.x);
      setIsDragging(true);
    };
    const handleDrag = (event: any) => {
      const [x, y] = d3.pointer(event, SVGRef.current);
      const currentAngle = Math.atan2(y - center.y, x - center.x);
      const angleDiff = currentAngle - startAngle;

      const degrees = angleDiff * (180 / Math.PI);
      const newRotation = currentRotation.value + degrees;

      setRotation(newRotation);
    };
    const drag = d3
      .drag<SVGSVGElement, unknown>()
      .container(SVGRef.current!)
      // .touchable(() => "ontouchstart" in (window as any) || navigator.maxTouchPoints > 0)
      // .touchable(true)
      .on("start", handleDragStart)
      .on("drag", handleDrag)
      .on("end", (event) => {
        const [x, y] = d3.pointer(event, SVGRef.current);
        const endAngle = Math.atan2(y - center.y, x - center.x);
        const angleDiff = endAngle - startAngle;

        currentRotation.value += angleDiff * (180 / Math.PI);
        setIsDragging(false);
      });

    svg.call(drag);
  }, [SVGDimensions, rotation]);

  return (
    <svg
      ref={SVGRef}
      viewBox={`0 0 ${maxDim} ${maxDim}`}
      style={{
        transformOrigin: "50% 50%",
        height: "max(100vh, 100vw)",
        width: "max(100vh, 100vw)",
        position: "relative",
        top: -offsetY,
        left: -offsetX,
        touchAction: "none",
        userSelect: "none",
      }}
    >
      <g
        ref={gRef}
        transform={`
          translate(${SVGDimensions.width / 2}, ${SVGDimensions.height / 2})
          rotate(${rotation})
      `}
      >
        <g fill="black">
          {paths}
          {labels}
        </g>
      </g>
    </svg>
  );
};

export default FeelingsWheel;
