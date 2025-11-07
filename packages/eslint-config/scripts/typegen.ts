import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { writeFile } from 'node:fs/promises'

import { javascript } from '@/configs'

const presets = [javascript()]

await Promise.all(
  presets.map(
    async preset => {
      const dts = await flatConfigsToRulesDTS([])
      await writeFile(`./types/xx.ts`, JSON.stringify({ a: 'xx' }), 'utf-8')
    }
  )
)
