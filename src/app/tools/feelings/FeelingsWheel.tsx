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
  const gRef = useRef<SVGGElement>(null);
  const [rotation, setRotation] = useState<number>(0);
  const rotationRef = useRef<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartDimensions = useRef({ height, width });
  const [feelings, setFeelings] = useState<FeelingsWheelData | null>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  }, [feelingsCategory]);

  const maxDim = useMemo(() => Math.max(width, height), [height, width]);
  // const minDim = useMemo(() => Math.min(width, height), [height, width]);

  const coreFeelingRadius = useMemo(() => {
    const margins = getSVGMarginFromBreakpoint(breakpoint);
    const radius = (maxDim - margins.top - margins.bottom) / 2 / 3;
    return radius;
  }, [breakpoint, maxDim]);

  const secondaryFeelingRadius = useMemo(
    () => coreFeelingRadius * 2,
    [coreFeelingRadius],
  );

  const leafFeelingRadius = useMemo(
    () => secondaryFeelingRadius * 1.5,
    [secondaryFeelingRadius],
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
      !feelings
        ? null
        : d3.pie<CoreFeelingDatum>().value((d) => d.angle)(
            coreFeelingsData(feelings),
          ),
    [feelings],
  );

  const { paths, labels } = useMemo(
    () =>
      !coreFeelingsPie
        ? { paths: null, labels: null }
        : getFeelingPaths(coreFeelingsPie, {
            radii: {
              core: coreFeelingRadius,
              secondary: secondaryFeelingRadius,
              leaf: leafFeelingRadius,
            },
            fontScale,
            fontColor: FEELINGS_FONT_COLORS[feelingsCategory],
          }),
    [
      coreFeelingsPie,
      coreFeelingRadius,
      secondaryFeelingRadius,
      leafFeelingRadius,
      feelingsCategory,
      fontScale,
    ],
  );

  useEffect(() => {
    if (!SVGRef.current || !gRef.current || !gRef.current) return;
    // if (!gRef.current) return;

    const svg: d3.Selection<SVGSVGElement, unknown, null, undefined> =
      d3.select(SVGRef.current);
    const g: d3.Selection<SVGGElement, unknown, null, undefined> = d3.select(
      gRef.current,
    );

    // track rotation across drags
    let startAngle = 0;
    let startRotation = 0;

    const handleDragStart = (
      event: d3.D3DragEvent<SVGGElement, unknown, unknown>,
    ) => {
      startAngle = Math.atan2(event.y, event.x);
      startRotation = rotationRef.current;
    };

    const handleDrag = (
      event: d3.D3DragEvent<SVGGElement, unknown, unknown>,
    ) => {
      const angle = Math.atan2(event.y, event.x);
      const delta = angle - startAngle;
      const nextRotation = startRotation + (delta * 180) / Math.PI;
      setRotation(nextRotation);
      rotationRef.current = nextRotation;
    };

    // const handleDragEnd = () => {
    //   setIsDragging(false);
    // };

    const drag = d3
      .drag<SVGGElement, unknown, unknown>()
      .container(SVGRef.current!)
      .on("start", handleDragStart)
      .on("drag", handleDrag);
    // .on("end", handleDragEnd);

    g.call(drag);

    const zoomed = ({ transform }: any) => {
      svg.attr("transform", transform);
    };

    const isTouchEvent = (
      event: PointerEvent | WheelEvent | TouchEvent,
    ): event is TouchEvent => {
      return "touches" in event;
    };

    const zoomFilter = (event: PointerEvent | WheelEvent | TouchEvent) => {
      console.log(event, isTouchEvent(event));
      if (isTouchEvent(event) && event.touches.length > 1) {
        return true;
      }
      if (event instanceof WheelEvent || event instanceof TouchEvent)
        return true;
      return false;
    };

    // const zoom = d3.zoom().on("zoom", zoomed).filter(zoomFilter);

    g.transition().duration(1000);
    // .call(zoom.transform as any, d3.zoomIdentity);

    return () => {
      g.on(".drag", null);
      g.on(".zoom", null);
    };
  }, [SVGRef]);

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
        userSelect: "none",
        touchAction: "none",
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
