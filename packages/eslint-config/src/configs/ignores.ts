import { globalIgnores } from 'eslint/config'

export const ignores = globalIgnores(
  [
      '**/node_modules',
      '**/dist',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      '**/bun.lockb',

      '**/auto-import?(s).d.ts',
      '**/components.d.ts',
    ]
  )
