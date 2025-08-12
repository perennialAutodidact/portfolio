"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import * as d3 from "d3";
import {
  coreFeelingsData,
  getFeelingPaths,
  getSVGMarginFromBreakpoint,
} from "./helpers";
import { FEELINGS_FONT_COLORS } from "./utilities/constants";
import {
  CoreFeelingDatum,
  FeelingsCategory,
  FeelingsWheelData,
} from "@/ts/Feeling";
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
  const [feelings, setFeelings] = useState<FeelingsWheelData | {}>({});
  const [feelingsCategory, setFeelingsCategory] =
    useState<FeelingsCategory>("comfortable");

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
  const offsetX = (maxDim - width) / 2;
  const offsetY = (maxDim - height) / 2 - 100;

  const coreFeelingRadius = useMemo(
    () => Math.min(width, height) / 5 - MARGIN.top / 2,
    [width, height],
  );
  const secondaryFeelingRadius = coreFeelingRadius * 2;
  const leafFeelingRadius = secondaryFeelingRadius * 1.5;

  const fontScale = useMemo(
    () => d3.scaleLinear([coreFeelingRadius, leafFeelingRadius], [17, 15]),
    [coreFeelingRadius],
  );

  const coreFeelingsPie = useMemo(
    () =>
      d3.pie<CoreFeelingDatum>().value((d, i) => d.angle)(
        coreFeelingsData(feelings),
      ),
    [coreFeelingsData, feelings],
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
      .touchable(
        () => "ontouchstart" in (window as any) || navigator.maxTouchPoints > 0,
      )
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
        <g>
          {paths}
          {labels}
        </g>
      </g>
    </svg>
  );
};

export default FeelingsWheel;
