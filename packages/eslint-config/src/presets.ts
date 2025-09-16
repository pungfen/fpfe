import { FlatConfigComposer, type Awaitable } from 'eslint-flat-config-utils'

import { ignores, javascript } from './configs'

import type { TypedFlatConfigItem, ConfigNames } from './types'

export const fp = (
  options: {
    typescript?: boolean
    vue?: boolean
  } = {},
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> => {
  const { vue: enableVue, typescript: enableTypescript } = options

  const configs: Awaitable<TypedFlatConfigItem[]>[] = [ignores(), javascript()]

  return new FlatConfigComposer<TypedFlatConfigItem, ConfigNames>(...configs)
}
