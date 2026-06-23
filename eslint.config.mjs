import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "no-debugger": "error",
      "semi": ["error", "always"],
      "func-call-spacing": ["error", "never"],
      "no-multi-spaces": "error"
    },
  },
  js.configs.recommended,
];