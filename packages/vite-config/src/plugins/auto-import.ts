import type { ComponentResolver } from 'unplugin-vue-components/types'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { type Plugin } from 'vite'

import { type Arrayable } from '../types'
import { interopDefault } from '../utils'

export const autoImport = async (config: {
  elementPlusResolver?: boolean
} = {}): Promise<Arrayable<Plugin>> => {
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
  })
}

export const autoImportComponents = async (config: {
  elementPlusResolver?: boolean
} = {}): Promise<Arrayable<Plugin>> => {
  const { elementPlusResolver } = config

  const resolvers: (ComponentResolver | ComponentResolver[])[] = []

  if (elementPlusResolver) {
    resolvers.push(
      (await interopDefault(import('unplugin-vue-components/resolvers'))).ElementPlusResolver()
    )
  }

  return Components({ resolvers })
}
