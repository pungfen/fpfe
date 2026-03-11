import { Config, MaybeArray } from '../types'
import { interopDefault } from '../utils'

export const javascript = async (): Promise<MaybeArray<Config>> => {
  const jsPlugin = await interopDefault(import('@eslint/js'))

  return [
    {
      name: 'fpfe/js',
      ...jsPlugin.configs.recommended
    }
  ]
}
