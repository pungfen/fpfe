import { findWorkspaceDir } from '@pnpm/find-workspace-dir'
import { composer } from 'eslint-flat-config-utils'

export * from './configs'

import type { Config } from './types'

import { imports, javascript, perfectionist, stylistic, typescript } from './configs'

export const defineWorkspaceConfig = async (configs: (Config & { path: string })[]) => {
  const workspaceRoot = await findWorkspaceDir(import.meta.dirname)

  console.log('workspaceRoot', workspaceRoot)

  const compose = composer()

  Promise.all(
    configs.map(
      async config => {
        const { imports: enableImports, javascript: enableJavascript, path, perfectionist: enablePerfectionist, stylistic: enableStylistic, typescript: enableTypescript } = config

        if (enableJavascript) {
          compose.append(javascript({ prefix: `${path}/` }))
        }

        if (enableTypescript) {
          compose.append(typescript({ prefix: `${path}/` }))
        }

        if (enableImports) {
          compose.append(imports({ prefix: `${path}/` }))
        }

        if (enableStylistic) {
          compose.append(stylistic({ prefix: `${path}/` }))
        }

        if (enablePerfectionist) {
          compose.append(perfectionist({ prefix: `${path}/` }))
        }
      }
    )
  )

  return compose
}
