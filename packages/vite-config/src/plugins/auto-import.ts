import type { ComponentResolver } from 'unplugin-vue-components/types'
import type { Plugin } from 'vite'

import { interopDefault } from '@fp/shared'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export const autoImport = async (config: {
  elementPlusResolver?: boolean
} = {}): Promise<Plugin> => {
  const { elementPlusResolver } = config

  const resolvers: (ComponentResolver | ComponentResolver[])[] = []

  if (elementPlusResolver) {
    resolvers.push(
      (await interopDefault(import('unplugin-vue-components/resolvers'))).ElementPlusResolver()
    )
  }

  return AutoImport({
    dirs: ['src/utils/**', 'src/composables/**', 'src/components/**'],
    imports: ['vue', VueRouterAutoImports],
    resolvers
  }) as Plugin
}

export const autoImportComponents = async (config: {
  elementPlusResolver?: boolean
} = {}): Promise<Plugin> => {
  const { elementPlusResolver } = config

  const resolvers: (ComponentResolver | ComponentResolver[])[] = []

  if (elementPlusResolver) {
    resolvers.push(
      (await interopDefault(import('unplugin-vue-components/resolvers'))).ElementPlusResolver()
    )
  }

  return Components({ resolvers }) as Plugin
}
