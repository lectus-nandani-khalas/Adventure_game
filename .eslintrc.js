module.exports = {
  env: {
    node: true,      // 👈 tells ESLint that 'module' and 'require' are valid
    es2021: true,
    browser: true,   // keep if you lint frontend code too
  },
  settings: {
    react: {
      version: "detect", // 👈 fixes React version warning
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // custom rules if needed
  },
};
