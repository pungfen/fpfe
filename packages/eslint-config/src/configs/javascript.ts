import globals from 'globals'

import { loadPlugin } from '../utils'

export const javascript = async () => {
  const js = await loadPlugin<typeof import('@eslint/js')>('@eslint/js')

  return {
    extends: ['js/recommended'],
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.node },
    plugins: { js }
  }
}
