import { defineConfig } from "oxlint";

import { base, typescript } from "@fp/oxlint-config";

export default defineConfig({
  extends: [base, typescript],
  plugins: ["typescript", "import", "unicorn", "vue"],
  rules: {
    "eslint-plugin-unicorn/filename-case": "off",
  },
});
