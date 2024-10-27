import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJsDoc from "eslint-plugin-jsdoc";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      jsdoc: pluginJsDoc,
    },
    rules: {
      // JSDoc rules
      "jsdoc/require-jsdoc": ["error"], // Require JSDoc comments
      "jsdoc/require-param": ["warn"],   // Warn for missing JSDoc param comments
      "jsdoc/require-returns": ["warn"],  // Warn for missing JSDoc return comments
    },
  },
  {
    // Override settings for Page.js and Layout.js
    files: ["**/Page.js", "**/Layout.js"],
    rules: {
      "jsdoc/require-jsdoc": "off",    // Disable JSDoc requirement
      "jsdoc/require-param": "off",     // Disable missing param warnings
      "jsdoc/require-returns": "off",   // Disable missing return warnings
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
