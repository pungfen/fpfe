import { type UserConfig } from 'vite'

import {
  autoImport,
  type AutoImportOptions,
  unocss,
  type UnocssOptions,
  vue,
  type VueOptions
} from './configs'

export interface Options {
  autoImport?: AutoImportOptions | boolean
  components?: boolean
  icons?: boolean
  unocss?: boolean | UnocssOptions
  vue?: boolean | VueOptions
  vueJsx?: boolean
}

export const fp = (options: Options = {}): UserConfig => {
  const {
    autoImport: enableAutoImport,
    unocss: enableUnocss,
    vue: enableVue
  } = options

  const config = {
    plugins: []
  } as Required<Pick<UserConfig, 'plugins'>> & UserConfig

  if (enableVue) {
    config.plugins.push(typeof enableVue === 'object' ? vue(enableVue) : vue())
  }

  if (enableUnocss) {
    config.plugins.push(
      typeof enableUnocss === 'object' ? unocss(enableUnocss) : unocss()
    )
  }

  if (enableAutoImport) {
    config.plugins.push(
      typeof enableAutoImport === 'object'
        ? autoImport(enableAutoImport)
        : autoImport({ imports: enableVue ? ['vue'] : [] })
    )
  }

  return config
}
