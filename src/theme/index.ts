import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: {
          value: "MontserratAlternatives-Regular, sans-serif",
        },
        heading: { value: "norwester, sans-serif" },
      },
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export default system;
