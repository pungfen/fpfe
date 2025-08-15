import fs from 'node:fs/promises'

import { flatConfigsToRulesDTS } from 'eslint-typegen/core'

import { combine } from '../src/utils'
import { ignores, javascript } from '../src/configs/'

const configs = await combine(ignores(), javascript())
const configNames = configs.map(i => i.name).filter(Boolean) as string[]

let dts = await flatConfigsToRulesDTS(configs, { includeAugmentation: false })

dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map(i => `'${i}'`).join(' | ')}
`

await fs.writeFile('src/typegen.ts', dts)
