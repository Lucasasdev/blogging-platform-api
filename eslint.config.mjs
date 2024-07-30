import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        NextFunction: "readOnly",
      },
    },
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
