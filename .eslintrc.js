module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb", "prettier"],
  parser: "babel-eslint",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-use-before-define": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "comma-dangle": 0,
    "import/no-unresolved": 0,
    "global-require": 0,
    "no-console": 0,
    "no-extend-native": 0,
    "react/jsx-props-no-spreading": 0,
    camelcase: 0,
    "no-return-assign": 0,
    "class-methods-use-this": 0,
    "symbol-description": 0,
    "no-underscore-dangle": 0,
    "no-useless-return": 0,
    "react/jsx-wrap-multilines": 0,
    "react/no-unescaped-entities": 0,
    "prefer-destructuring": 0,
    "no-plusplus": 0
  }
};
