module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["xo", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "capitalized-comments": "off",
    "no-unused-vars": 1,
    "new-cap": 0,
  },
};
