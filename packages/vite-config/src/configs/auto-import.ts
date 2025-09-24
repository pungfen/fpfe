import type { Arrayable } from '@fp/shared'
import type { Plugin } from 'vite'

import { pluginAutoImport, type PluinAutoImportOptions } from '../plugins'

export type AutoImportOptions = PluinAutoImportOptions

export const autoImport = (
  options: AutoImportOptions = {}
): Arrayable<Plugin> => {
  return pluginAutoImport({
    dirs: options.dirs,
    imports: options.imports,
    resolvers: options.resolvers
  })
}
