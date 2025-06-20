import { Global, css } from "@emotion/react";

const Fonts = () => {
  const fonts = [
    {
      family: "norwester",
      style: "normal",
      weight: "700",
      display: "swap",
      src: "./fonts/norwester.otf",
      format: "opentype",
    },
    {
      family: "MontserratAlternatives-Regular",
      style: "normal",
      weight: "400",
      display: "swap",
      src: "./fonts/MontserratAlternates-Regular.ttf",
      format: "truetype",
    },
    {
      family: "Kollektif",
      style: "display",
      weight: "700",
      display: "swap",
      src: "./fonts/Kollektif.ttf",
      format: "truetype",
    },
  ];

  const unicodeRange =
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD";

  const styles = fonts
    .map((font) => {
      return `
        @font-face {
          /* latin */
          font-family: "${font.family}";
          font-style: "${font.style}";
          font-weight: "${font.weight}"
          font-display: "${font.display}";
          src: url("${font.src} format(${font.format})");
          unicode-range: ${unicodeRange};
        }
      `;
    })
    .join("");

  return (
    <Global
      styles={css`
        ${styles}
      `}
    />
  );
};

export default Fonts;
