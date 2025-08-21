import js from "@eslint/js";
// import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import css from "@eslint/css";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginNext from "@next/eslint-plugin-next";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  { ...css.configs.recommended },
  {
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      next: pluginNext,
      "jsx-a11y": pluginJsxA11y,
      css,
    },
    settings: {
      react: {
        version: "detect",
        jsxImportSource: "@emotion/react",
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    ignores: ["prisma/**", "node_modules/**", ".next/**", "dist/**"],
  },
];
