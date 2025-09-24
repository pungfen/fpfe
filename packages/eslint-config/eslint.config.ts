import { defineConfig } from './src'

export default defineConfig({
  tsconfigRootDir: import.meta.dirname,
  typescript: {
    files: ['eslint.config.ts', 'src/**/*.ts']
  }
})
