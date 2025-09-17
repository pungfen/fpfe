import { FlatConfigComposer, type Awaitable } from 'eslint-flat-config-utils'
import { ignores, javascript, perfectionist, typescript } from './configs'
import type { TypedFlatConfigItem, ConfigNames, Config } from './types'



export const fp = (
  options: Config = {},
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> => {
  const { vue: enableVue, typescript: enableTypescript, formatter: enableFormatter } = options

  const configs: Awaitable<TypedFlatConfigItem[]>[] = [ignores(), javascript()]

  if (enableTypescript) {
    configs.push(typescript())
  }

  if (enableFormatter) {
    configs.push(perfectionist())
  }

  return new FlatConfigComposer<TypedFlatConfigItem, ConfigNames>(...configs)
}
