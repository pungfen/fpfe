import { defineConfig } from "oxlint";

import { base, typescript } from "@fp/oxlint-config";

export default defineConfig({
  extends: [base, typescript],
});