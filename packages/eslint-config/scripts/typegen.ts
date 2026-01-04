import { writeFile } from 'node:fs/promises'
import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import vue from 'eslint-plugin-vue'
import { pluginsToRulesDTS } from 'eslint-typegen/core'

const dts = await pluginsToRulesDTS(
  { '@stylistic': stylistic, perfectionist, vue }
)

void writeFile('src/typegen.d.ts', dts, 'utf-8')
