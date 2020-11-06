module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'jsx-a11y/anchor-is-valid': ['error'],
    'simple-import-sort/sort': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/display-name': 0,
  },
};
