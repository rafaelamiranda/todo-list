module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules/", "_explicacoes/"],
  rules: {
    "no-console": "error",
    "react/no-unknown-property": ["error", { ignore: ["jsx", "global"] }],
  },
};
