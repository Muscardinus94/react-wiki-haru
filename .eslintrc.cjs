module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "quotes": ["error", "single"],
    "no-duplicate-imports": "error",
    "no-console": ["warn", { "allow": ["warn", "error", "info"] }],
    "no-unused-vars": "error",
    "no-multiple-empty-lines": "error"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
