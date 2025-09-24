import { defineConfig } from '@fp/eslint-config'

export default defineConfig({
  tsconfigRootDir: import.meta.dirname,
  typescript: {
    files: ['eslint.config.ts', 'src/**/*.ts']
  }
})
