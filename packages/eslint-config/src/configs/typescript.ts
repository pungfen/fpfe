import { loadPlugin } from '../utils'

export const typescript = async (options: { prefix?: string } = {}) => {
  const { prefix = '' } = options

  const ts = await loadPlugin<typeof import('typescript-eslint')>('typescript-eslint')

  return [
    ...(ts.configs.recommended),
    {
      files: [`${prefix}**/*.?([cm])[jt]s?(x)`],
      languageOptions: {
        parser: ts.parser,
        parserOptions: { project: true }
      }
    }
  ]
}
