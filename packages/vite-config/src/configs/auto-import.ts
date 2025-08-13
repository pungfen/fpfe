import { pluginAutoImport, type PluinAutoImportOptions } from '../plugins'

import type { Arrayable } from '@fp/shared'
import type { Plugin } from 'vite'

export type AutoImportOptions = PluinAutoImportOptions

export const autoImport = (
  options: AutoImportOptions = {}
): Arrayable<Plugin> => {
  return pluginAutoImport({
    imports: options.imports,
    dirs: options.dirs,
    resolvers: options.resolvers
  })
}
