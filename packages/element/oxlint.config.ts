import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "import", "unicorn", "vue"],
  rules: {
    "eslint-plugin-unicorn/filename-case": "off",
  },
});