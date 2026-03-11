import { type Linter } from 'eslint'

import { MaybeArray } from '../types'
import { interopDefault } from '../utils'

export const stylistic = async (): Promise<MaybeArray<Linter.Config>> => {
  const stylisticPlugin = await interopDefault(import('@stylistic/eslint-plugin'))
  return {
    plugins: {
      ['@stylistic']: stylisticPlugin
    },
    rules: {
      ...stylisticPlugin.configs.customize({ commaDangle: 'never' }).rules
    }
  }
}
