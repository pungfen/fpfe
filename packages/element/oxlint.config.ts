import { defineConfig } from "oxlint";

import { base, typescript, vue } from "@fp/oxlint-config";

export default defineConfig({
  extends: [base, typescript, vue],
  plugins: ["typescript", "import", "unicorn", "vue"],
  rules: {
    "eslint-plugin-unicorn/filename-case": "off",
  },
});
