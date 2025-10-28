/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { composer } from 'eslint-flat-config-utils'

export * from './configs'

import type { Config } from './types'

import { imports, javascript, perfectionist, stylistic, typescript } from './configs'

export const defineWorkspaceConfig = async (configs: (Config & { entry: string })[]) => {
  const compose = composer()

  Promise.all(
    configs.map(
      async config => {
        const { entry, imports: enableImports, javascript: enableJavascript, perfectionist: enablePerfectionist, stylistic: enableStylistic, typescript: enableTypescript } = config

        if (enableJavascript) {
          compose.append(
            javascript(
              {
                prefix: `${entry}/`,
                ...(typeof enableJavascript === 'object' ? enableJavascript : {})
              }
            )
          )
        }

        if (enableTypescript) {
          compose.append(
            typescript(
              {
                prefix: `${entry}/`,
                ...(typeof enableTypescript === 'object' ? enableTypescript : {})
              }
            )
          )
        }

        console.log(enableImports)

        if (enableImports) {
          compose.append(
            imports(
              {
                prefix: `${entry}/`,
                typescript: !!enableTypescript,
                ...(typeof enableImports === 'object' ? enableImports : {})
              }
            )
          )
        }

        if (enableStylistic) {
          compose.append(
            stylistic(
              {
                prefix: `${entry}/`,
                ...(typeof enableStylistic === 'object' ? enableStylistic : {})
              }
            )
          )
        }

        if (enablePerfectionist) {
          compose.append(
            perfectionist(
              {
                prefix: `${entry}/`,
                ...(typeof enablePerfectionist === 'object' ? enablePerfectionist : {})
              }
            )
          )
        }
      }
    )
  )

  return compose
}
