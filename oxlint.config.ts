import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    pedantic: "warn",
    style: "error",
    suspicious: "warn",
  },
  rules: {
    "eslint/no-unused-vars": "error",
  },
});