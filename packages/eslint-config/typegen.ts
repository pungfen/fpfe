import fs from 'node:fs/promises'

import { flatConfigsToRulesDTS } from 'eslint-typegen/core'

import { javascript, ignores, perfectionist, imports } from './src/configs'

const configs = (
  await Promise.all([ignores(), javascript(), perfectionist(), imports()])
).flat()
const names = configs.map(i => i.name).filter(Boolean) as string[]

let dts = await flatConfigsToRulesDTS(configs, { includeAugmentation: false })

await fs.writeFile(
  'src/typegen.d.ts',
  (dts += `
  // Names of all the configs
  export type ConfigNames = ${names.map(i => `'${i}'`).join(' | ')}
  `),
)
