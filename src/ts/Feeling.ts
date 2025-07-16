export type CoreFeelingName =
  | "sad"
  | "angry"
  | "disgusted"
  | "happy"
  | "fearful"
  | "bad";

export type ColorHSL = {
  h: number;
  s: number;
  l: number;
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
  secondaryFeelings: SecondaryFeeling[];
};

export type SecondaryFeelingDatum = {
  name: string;
  color: ColorHSL;
  angle: number;
  leafFeelings: LeafFeeling[];
};

export type LeafFeelingDatum = {
  name: string;
  color: ColorHSL;
  angle: number;
};

export type FeelingsWheel = {
  [key in CoreFeelingName]?: {
    name: string;
    baseColor: ColorHSL;
    secondaryFeelings: SecondaryFeeling[];
  };
};
