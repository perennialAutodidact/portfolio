"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import {
  coreFeelingsData,
  getFeelingPaths,
  getFontSizesForBreakpoint,
  getSVGMarginFromBreakpoint,
} from "./helpers";
import { FEELINGS_FONT_COLORS } from "./utilities/constants";
import {
  CoreFeelingDatum,
  FeelingsCategory,
  FeelingsWheelData,
} from "@/ts/Feeling";
import useBreakpoint from "@/hooks/useBreakpoint";
import useResizeObserver from "@/hooks/useResizeObserver";

const FeelingsWheel = () => {
  const { ref: SVGRef, height, width } = useResizeObserver();
  const breakpoint = useBreakpoint();
  const gRef = useRef<SVGGElement | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartDimensions = useRef({ height, width });
  const [feelings, setFeelings] = useState<FeelingsWheelData | {}>({});
  const [feelingsCategory, setFeelingsCategory] =
    useState<FeelingsCategory>("uncomfortable");

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams({
        colorTheme: "default",
        feelingsCategory,
      });
      const res = await fetch("/api/feelings?" + searchParams.toString());
      const data = await res.json();
      setFeelings(data);
    };
    fetchData();
  }, []);

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
    [height, width, isDragging],
  );

  const maxDim = useMemo(() => Math.max(width, height), [height, width]);
  const minDim = useMemo(() => Math.min(width, height), [height, width]);

  const coreFeelingRadius = useMemo(() => {
    const margins = getSVGMarginFromBreakpoint(breakpoint);
    const radius =
      (Math.max(height, width) - margins.top - margins.bottom) / 2 / 3;
    console.log({ breakpoint, radius, width, height, minDim });
    return radius;
  }, [width, height, breakpoint]);

  const secondaryFeelingRadius = useMemo(
    () => coreFeelingRadius * 2,
    [height, width, coreFeelingRadius],
  );

  const leafFeelingRadius = useMemo(
    () => secondaryFeelingRadius * 1.5,
    [height, width, secondaryFeelingRadius],
  );

  const fontSizes = useMemo(
    () => getFontSizesForBreakpoint(breakpoint),
    [breakpoint],
  );
  const fontScale = useMemo(
    () => d3.scaleLinear([coreFeelingRadius, leafFeelingRadius], fontSizes),
    [coreFeelingRadius, leafFeelingRadius, fontSizes],
  );

  const coreFeelingsPie = useMemo(
    () =>
      d3.pie<CoreFeelingDatum>().value((d, i) => d.angle)(
        coreFeelingsData(feelings),
      ),
    [coreFeelingsData, feelings, height, width],
  );

  const { paths, labels } = useMemo(
    () =>
      getFeelingPaths(coreFeelingsPie, {
        radii: {
          core: coreFeelingRadius,
          secondary: secondaryFeelingRadius,
          leaf: leafFeelingRadius,
        },
        fontScale,
        fontColor: FEELINGS_FONT_COLORS[feelingsCategory],
      }),
    [coreFeelingsPie],
  );

  useEffect(() => {
    if (!SVGRef.current || !gRef.current) return;

    const svg = d3.select(SVGRef.current);

    // track rotation across drags
    let startRotation = 0;
    let startAngle = 0;

    const handleDragStart = (event: any) => {
      const [x, y] = d3.pointer(event, SVGRef.current);
      startAngle = Math.atan2(y, x);
      startRotation = rotation;
      setIsDragging(true);
    };

    const handleDrag = (event: any) => {
      const [x, y] = d3.pointer(event, SVGRef.current);
      const currentAngle = Math.atan2(y, x);
      let angleDiff = currentAngle - startAngle;

      const degrees = angleDiff * (180 / Math.PI);
      const newRotation = startRotation + degrees;
      setRotation(newRotation);
    };

    const handleDragEnd = (event: any) => {
      const [x, y] = d3.pointer(event, SVGRef.current);
      const endAngle = Math.atan2(y, x);
      let angleDiff = endAngle - startAngle;
      if (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
      if (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;
      startRotation += angleDiff * (180 / Math.PI);
      setIsDragging(false);
    };

    const drag = d3
      .drag<SVGSVGElement, unknown>()
      .container(SVGRef.current!)
      .touchable(
        () => "ontouchstart" in (window as any) || navigator.maxTouchPoints > 0,
      )
      .on("start", handleDragStart)
      .on("drag", handleDrag)
      .on("end", handleDragEnd);

    svg.call(drag);

    return () => {
      svg.on(".drag", null);
    };
  }, [SVGDimensions.height, SVGDimensions.width, rotation, isDragging]);

  return (
    <svg
      ref={SVGRef}
      viewBox={`${-maxDim / 2} ${-maxDim / 2} ${maxDim} ${maxDim}`}
      preserveAspectRatio="xMidYMid meet"
      style={{
        transformOrigin: "50% 50%",
        height: "100%",
        width: "100%",
        position: "relative",
        touchAction: "none",
        userSelect: "none",
      }}
    >
      <g ref={gRef} transform={`rotate(${rotation})`}>
        <g>
          {paths}
          {labels}
        </g>
      </g>
    </svg>
  );
};

export default FeelingsWheel;
