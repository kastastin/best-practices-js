import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      strict: ["error", "global"],
      "multiline-comment-style": ["error", "starred-block"],
      "spaced-comment": ["error", "always"],
      semi: ["error", "always"],
      "semi-spacing": "error",
      "no-extra-semi": "error",
      "no-unexpected-multiline": "error",
      "max-len": ["error", { code: 80 }],
      "comma-style": ["error", "last"],
      "comma-dangle": ["error", "always-multiline"],
      indent: ["error", 2],
      "space-infix-ops": "error",
      "brace-style": "error",
      "space-before-blocks": "error",
      "keyword-spacing": "error",
      "arrow-spacing": "error",
      "space-before-function-paren": [
        "error",
        { anonymous: "always", named: "never", asyncArrow: "always" },
      ],
      "space-in-parens": ["error", "never"],
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "comma-spacing": ["error", { before: false, after: true }],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    },
  },
  pluginJs.configs.recommended,
];
