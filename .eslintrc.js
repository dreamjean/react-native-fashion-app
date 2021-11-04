module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "@babel/eslint-parser",
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "simple-import-sort", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" },
      {
        usePrettierrc: false,
      },
    ],
    "jsx-a11y/anchor-is-valid": ["error"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
