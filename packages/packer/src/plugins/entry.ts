import type { Plugin } from 'vite'
import type { AppConfig } from '../config'
import { stringify } from '../utils'

export const entry = (options: { apps: AppConfig[] }) => {
  const { apps } = options
  return {
    name: 'entry',
    transformIndexHtml(html: string) {
      return {
        html,
        tags: [
          {
            attrs: { noshim: true, type: 'module' },
            injectTo: 'head',
            tag: 'script',
            children: `${apps.reduce((res, app) => res += `ur.register("${app.name}", ${stringify(app.predicate)}, () => import("/home/fp/workspace/enocboot-web/apps/play/src/index.ts"));`, '')}` + 'ur.start()'
          }
        ]
      }
    }
  } as Plugin
}
