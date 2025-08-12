import { ColorPalettes } from "@/ts/Feeling";

export const COLOR_PALETTES: ColorPalettes = {
  comfortable: {
    default: {
      Accepted: "#7EC9C6",
      Confident: "#A49BE8",
      Excited: "#DE85FF",
      Interested: "#9DB3FB",
      Loving: "#E79DB3",
      Strong: "#FFEF85",
    },
    tritanomoly: {
      Accepted: "#80C8C6",
      Confident: "#A3AFD9",
      Excited: "#DBA5E8",
      Interested: "#9DC6ED",
      Loving: "#E4A2AE",
      Strong: "#FED298",
    },
  },
  uncomfortable: {
    default: {
      Afraid: "#79025B",
      Alone: "#1D5D52",
      Angry: "#B31919",
      Bad: "#AF4E08",
      Dislike: "#5d6616",
      Embarrassed: "#A42864",
      Sad: "#094786",
    },
    tritanomoly: {
      Afraid: "#75194A",
      Alone: "#1F5A54",
      Angry: "#AD1918",
      Bad: "#AB3B14",
      Dislike: "#5D5024",
      Embarrassed: "#9F3859",
      Sad: "#0B577A",
    },
  },
} as const;

export const FEELINGS_FONT_COLORS = {
  comfortable: "#3f3f3f",
  uncomfortable: "#c0c0c0",
} as const;
