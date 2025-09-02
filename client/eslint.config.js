import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true, impliedStrict: true },
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
    },
  },
];
