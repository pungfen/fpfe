import { defineConfig } from "rolldown";

import vue from "unplugin-vue/rolldown";

export default defineConfig({
  entry: "src/index.ts",
  platform: "neutral",
  plugins: [vue({ isProduction: true })],
});