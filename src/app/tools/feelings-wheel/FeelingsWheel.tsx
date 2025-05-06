
'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { feelings, colors } from './feelings'
import { countThirdTierFeelings, generateDistinctColors } from './helpers';
import { Feeling } from '@/ts/Feeling';
import { count } from 'console';

const FeelingsWheel = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        const margin = 100;
        const radius = Math.min(width, height) / 4 - margin / 2;

        // Clear previous render (important during fast refresh in dev)
        d3.select(ref.current).selectAll('*').remove();

        const svg = d3
            .select(ref.current)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const color = d3
            .scaleOrdinal<string>()
            .domain(Object.keys(feelings))
            .range(generateDistinctColors(Object.keys(feelings).length));

        const pie = d3.pie<[string, number]>().value((d) => d[1]);
        const arc = d3.arc<d3.PieArcDatum<[string, number]>>()
            .innerRadius(0)
            .outerRadius(radius);
        const totalThirdTierChildren = countThirdTierFeelings(feelings)

        const data = Object.entries(feelings)
            .map(([key, feeling]: [string, Feeling]): [string, number] => {
                return [feeling.name, 360 / (feeling.children?.length || totalThirdTierChildren)]
            });

        const labelFontSize = 12;

        svg
            .selectAll('path')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('text', 'wow')
            .attr('fill', (d) => color(d.data[0]))
            .attr('stroke', 'black')
            .style('stroke-width', '1px');

        const getLabelAngleDegrees = (label: d3.PieArcDatum<[string, number]>) => {
            const [x, y] = arc.centroid(label)
            const angle = (label.startAngle + label.endAngle) / 2;
            let degrees = (angle * 180) / Math.PI
            return degrees

        }
        const getQuadrant = (degrees: number) => {
            if (degrees >= 0 && degrees < 90) return 1
            else if (degrees >= 90 && degrees < 180) return 2
            else if (degrees >= 180 && degrees < 270) return 3
            else if (degrees >= 270 && degrees < 360) return 4
        }

        svg
            .selectAll('text')
            .data(pie(data))
            .enter()
            .append('text')
            .attr('transform', d => {
                let degrees = getLabelAngleDegrees(d)
                const quandrant = getQuadrant(degrees);
                const [x, y] = arc.centroid(d);

                let labelX = x;
                let labelY = y;
                if (quandrant === 1) {
                    // labelY += labelFontSize / 2;
                    // labelX -= labelFontSize / 2;
                } else if (quandrant === 2) {
                    // labelY += labelFontSize / 2;
                    // labelX -= labelFontSize / 2;
                } else if (quandrant === 3) {
                    // labelY += labelFontSize / 2;
                    // labelX += labelFontSize / 2;
                } else if (quandrant === 4) {
                    // labelY -= labelFontSize / 2;
                    // labelX -= labelFontSize / 2;
                }

                // rotate text to radiate from center
                degrees -= 90
                // flip half the labels for readability
                if (quandrant === 3 || quandrant === 4) {
                    degrees -= 180;
                }


                return `translate(${labelX}, ${labelY}) rotate(${degrees})`
            })
            .attr('text-anchor', label => {
                const degrees = getLabelAngleDegrees(label);
                const quandrant = getQuadrant(degrees)

                let textAnchor = 'start';
                if (quandrant === 3 || quandrant === 4) {
                    textAnchor = 'end'
                }

                return textAnchor
            })
            .attr('alignment-baseline', 'end')
            .style('font-size', `${labelFontSize}px`)
            .text(d => d.data[0])
    }, []);


    return <div ref={ref} />;
};

export default FeelingsWheel;
