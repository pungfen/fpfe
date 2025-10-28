import type { ComponentResolver } from 'unplugin-vue-components/types'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { type Plugin } from 'vite'

export const autoImport = async (config: { elementPlusResolver?: boolean } = {}): Promise<Arrayable<Plugin>> => {
  const { elementPlusResolver } = config

  const resolvers: (ComponentResolver | ComponentResolver[])[] = []

  if (elementPlusResolver) {
  }

  return AutoImport({
    dirs: ['src/utils/**', 'src/composables/**', 'src/components/**'],
    imports: ['vue', VueRouterAutoImports],
    resolvers
  })
}

export const autoImportComponents = async (config: { elementPlusResolver?: boolean } = {}): Promise<Arrayable<Plugin>> => {
  const { elementPlusResolver } = config

  const resolvers: (ComponentResolver | ComponentResolver[])[] = []

  if (elementPlusResolver) {
    await Promise.resolve([])
  }

  return Components({ resolvers })
}
