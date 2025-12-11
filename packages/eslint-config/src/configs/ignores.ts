import type { EslintConfig } from '../types'

export const ignores = (): EslintConfig[] => {
  return [
    {
      ignores: [
        "**/package-lock.json",
        "**/pnpm-lock.yaml",
        "**/node_modules",
        "**/dist",
        "**/auto-import?(s).d.ts",
        "**/components.d.ts"
      ]
    }
  ]
}
