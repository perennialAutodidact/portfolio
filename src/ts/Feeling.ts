export type FeelingsCategory = "comfortable" | "uncomfortable";

export type UncomfortableFeelingNames =
  | "Afraid"
  | "Alone"
  | "Angry"
  | "Bad"
  | "Dislike"
  | "Embarrassed"
  | "Sad";

export type ComfortableFeelingNames =
  | "Accepted"
  | "Confident"
  | "Excited"
  | "Interested"
  | "Loving"
  | "Strong";

export type CoreFeelingName =
  | UncomfortableFeelingNames
  | ComfortableFeelingNames;

export type ColorThemeNames = "default" | "tritanomoly";

export type ColorHSL = {
  h: number;
  s: number;
  l: number;
};

export type ColorHex = `#${string}`;

export type ColorPalettes = {
  comfortable: {
    [key in ColorThemeNames]: {
      [key in ComfortableFeelingNames]: ColorHex;
    };
  };
  uncomfortable: {
    [key in ColorThemeNames]: {
      [key in UncomfortableFeelingNames]: ColorHex;
    };
  };
};

export type LeafFeeling = {
  name: string;
  color: ColorHSL;
};

export type SecondaryFeeling = {
  name: string;
  color: ColorHSL;
  leafFeelings: LeafFeeling[];
};

export type CoreFeeling = {
  name: string;
  baseColor: ColorHSL;
  secondaryFeelings: SecondaryFeeling[];
};

export type CoreFeelingDatum = {
  name: string;
  color: ColorHSL;
  angle: number;
  secondaryFeelingsPie: d3.PieArcDatum<SecondaryFeelingDatumWithLeaves>[];
};

export type SecondaryFeelingDatum = {
  name: string;
  color: ColorHSL;
  angle: number;
  leafFeelings: LeafFeeling[];
};
export type SecondaryFeelingDatumWithLeaves = SecondaryFeelingDatum & {
  leafFeelingsPie: d3.PieArcDatum<LeafFeelingDatum>[];
};

export type LeafFeelingDatum = {
  name: string;
  color: ColorHSL;
  angle: number;
};

export type FeelingsWheelData = {
  [key in CoreFeelingName]?: {
    name: CoreFeelingName;
    baseColor: ColorHSL;
    secondaryFeelings: SecondaryFeeling[];
  };
};
