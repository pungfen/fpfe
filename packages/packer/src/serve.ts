import type { Config } from './config'
import process from 'node:process'

import { createServer, mergeConfig } from 'vite'

import { entry } from './plugins'

export const serve = async (config: Config) => {
  const { apps, vite } = config

  await Promise.all(
    apps.map(
      async (app) => {
        try {
          const server = await createServer(mergeConfig({
            plugins: [
              entry({ apps })
            ]
          }, vite))

          server.middlewares.use(
            (req, res, next) => {
              if (req.headers.accept.includes('text/html')) {
                const pathname = new URL(req.url!, `http:/${req.headers.host}`).pathname
                const target = apps.find(app => app.predicate(pathname))
                if (!target) {
                  throw new Error(`There is no corresponding app of '${pathname}'.`)
                }
                if (target.name === app.name) {
                  next()
                }
                else {
                  res.writeHead(301, { location: '' })
                  res.end()
                }
              }
            }
          )

          await server.listen()
          server.printUrls()
        }
        catch (e) {
          console.error(e)
          process.exit(1)
        }
      }
    )
  )
}
