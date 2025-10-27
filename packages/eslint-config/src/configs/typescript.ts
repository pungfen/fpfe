import { loadPlugin } from '../utils'

export const typescript = async () => {
  const tseslint = await loadPlugin<typeof import('typescript-eslint')>('typescript-eslint')
  return tseslint.configs.recommended
}
