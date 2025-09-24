import { defineConfig } from '@fp/eslint-config'

export default defineConfig({
  tsconfigRootDir: import.meta.dirname,
  typescript: {
    files: ['*.config.ts', 'src/**/*.ts']
  }
})
