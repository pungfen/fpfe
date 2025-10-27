import { loadPlugin } from '../utils'

export const perfectionist = async () => {
  const perfectionist = await loadPlugin<typeof import('eslint-plugin-perfectionist')>('eslint-plugin-perfectionist')
  return perfectionist.configs['recommended-natural']
}
