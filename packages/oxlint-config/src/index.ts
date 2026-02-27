import { type OxlintConfig } from "oxlint";

export const base: OxlintConfig = {
  categories: {
    correctness: "error",
  },
  rules: {},
};

export const typescript: OxlintConfig = {
  plugins: ["typescript"],
  rules: {},
};

export const vue: OxlintConfig = {
  plugins: ["vue"],
  rules: {},
};