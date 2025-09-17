import { join, resolve } from 'node:path'
import { cp, writeFile, readFile, rm } from 'node:fs/promises'

import { it, beforeAll, afterAll } from 'vitest'
import { execa } from 'execa'
import fg from 'fast-glob'

import type { Config } from '../src'

const isWindows = process.platform === 'win32'
const timeout = isWindows ? 300_000 : 30_000

// beforeAll(async () => {
//   await rm('_fixtures', { recursive: true, force: true })
// })
// afterAll(async () => {
//   await rm('_fixtures', { recursive: true, force: true })
// })

function runWithConfig (name: string, config: Config = {}) {
  it.concurrent(name, async ({ expect }) => {
    const from = resolve('fixtures/input')
    const output = resolve('fixtures/output', name)
    const target = resolve('_fixtures', name)

    await cp(from, target, { recursive: true, filter: src  => !src.includes('node_modules')})

    await writeFile(join(target, 'eslint.config.js'), `
      // @eslint-disable
      import { fp } from '../src'
      export default fp(${JSON.stringify(config)})
    `)

    await execa('pnpm', ['eslint', '.', '--fix'], { cwd: target, stdio: 'pipe'})

    const files = await fg('**/*', { cwd: target, ignore: ['node_modules', 'eslint.config.js']})

    await Promise.all(files.map(
      async file => {
        const content = await readFile(join(target, file), 'utf-8')
        const source = await readFile(join(from, file), 'utf-8')
        const outputPath = join(output, file)
        if (content === source) {
          await rm(outputPath, { force: true})
          return 
        }
        await expect.soft(content).toMatchFileSnapshot(join(output, file))
      }
    ))
  }, timeout)
}

runWithConfig('javascript', { formatter: true})