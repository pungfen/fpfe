import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import { loadPlugin } from '../utils'

export const imports = async (options: { prefix?: string } = {}) => {
  const imports = await loadPlugin<typeof import('eslint-plugin-import')>('eslint-plugin-import')
  const unused = await loadPlugin<typeof import('eslint-plugin-unused-imports')>('eslint-plugin-unused-imports')

  const { prefix = '' } = options

  if (prefix) {}

  return [
    imports.flatConfigs.recommended,
    {
      files: [`${prefix}**/*.?([cm])[jt]s?(x)`],
      plugins: { 'unused-imports': unused }
    }
  ] as ResolvableFlatConfig
}
