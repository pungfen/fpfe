import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'rolldown'

import Vue from 'unplugin-vue/rolldown'
import VueJsx from 'unplugin-vue-jsx/rolldown'
import Dts from 'unplugin-dts/rolldown'

import fg from 'fast-glob'

const workspaceRoot = fileURLToPath(new URL('../../', import.meta.url))
const cwd = resolve(workspaceRoot, 'packages/element')
const npm = resolve(workspaceRoot, 'npm/element')

const input = await fg('src/*', { cwd })

export default defineConfig({
  cwd,
  input,
  plugins: [
    Vue(),
    VueJsx(),
    Dts({ root: cwd, processor: 'vue', outDirs: resolve(npm, 'types')})
  ],
  external: ['vue', 'element-plus'],
  output: [
    {
      format: 'esm',
      dir: resolve(npm, 'es'),
      cleanDir: true
    },
    {
      format: 'cjs',
      dir: resolve(npm, 'cjs'),
      cleanDir: true
    }
  ]
})
