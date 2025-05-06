import * as d3 from 'd3';
import { Feelings } from '@/ts/Feeling';


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
}

// const countChildren = (feelings: Feelings | undefined | null, count: number = 0): number => {
//   if(!feelings) return count;
//   if(feelings.length){
//   const feeling = feelings?.pop();
//   count += feeling?.children?.length || 0;
//   return countChildren(feeling?.children, count)
//   }
// }

const countThirdTierFeelings = (feelings: Feelings): number => {
  return Object.values(feelings).reduce((tier3Count, tier1Feeling) => {
    if (!tier1Feeling.children) return tier3Count;

    return tier3Count + tier1Feeling.children.reduce<number>((sum, tier2Feeling) => {
      return sum + (tier2Feeling.children?.length || 0)
    }, 0);
  }, 0);
}

export { countThirdTierFeelings, generateDistinctColors };
