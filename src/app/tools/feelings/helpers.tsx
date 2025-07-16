import * as d3 from "d3";
import { ColorHSL, FeelingsWheel } from "@/ts/Feeling";
import { Fragment } from "react";

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
    const labelFontSize = 18;

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
        // textAnchor={textAnchor}
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

export { formatHSLString, generateDistinctColors, generateLabels };
