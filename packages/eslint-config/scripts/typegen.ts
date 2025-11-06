import type { Linter } from 'eslint'

import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import fs from 'node:fs/promises'
import path from 'node:path'
import { URL } from 'node:url'

import type { PresetModule } from './types'

import { interopDefault, pascalize } from '../src/utils'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

function css(): Promise<PresetModule> {
  return {
    // @ts-expect-error -- FIXME: `@eslint/css` is not yet type definitions exporting
    css: async (): Promise<Linter.Config[]> => {
      const { rules } = await interopDefault(await import('@eslint/css'))
      const configs = { plugins: { css: { rules } } }
      return [configs]
    }
  }
}

function javascript(): Promise<PresetModule> {
  return {
    // @ts-expect-error -- FIXME: `eslint/use-at-your-own-risk` is not yet type definitions exporting
    javascript: async (): Promise<Linter.Config[]> => {
      const { builtinRules } = await interopDefault(await import('eslint/use-at-your-own-risk'))
      const configs = { plugins: { '': { rules: Object.fromEntries(builtinRules.entries()) } } }
      return [configs]
    }
  }
}

async function loadPresets() {
  const files = await fs.readdir(path.resolve(__dirname, '../src/configs'))
  return files
    .filter(file => file.endsWith('.ts') && file !== 'index.ts')
    .map(file => file.replace(/\.ts$/, ''))
}

async function main() {
  const presets = await loadPresets()

  // typegen for presets
  const parameters = {
    a11y: true,

    barrel: true,

    // for vue
    composable: true,

    // for comments
    directives: {},

    i18n: {},

    // for module-interop
    interop: true,

    // for jsonc
    json: true,
    json5: true,

    jsonc: true,
    scopedCss: true
  }
  for (const preset of presets) {
    console.log(`Generating types for ${preset} ...`)
    const module_ = await resolvePresetModule(preset)
    const resolvedModule = (await interopDefault(module_))[preset]
    const configs = await resolvedModule(parameters)
    let dts = await flatConfigsToRulesDTS(configs, {
      exportTypeName: `${pascalize(preset)}Rules`,
      includeAugmentation: false,
      includeTypeImports: preset !== 'prettier'
    })

    // NOTE: workaround for vitest type gen errors with eslint-typegen
    if (preset === 'vitest') {
      dts = `// @ts-nocheck\n` + dts
    }
    await fs.writeFile(path.resolve(__dirname, `../src/types/gens/${preset}.ts`), dts)
  }

  // typegen for eslint `RulesRecord`
  const eslintDts = [...presets.map(p => `import type { ${`${pascalize(p)}Rules`} } from './${p}'`), ``, `declare module 'eslint' {`, `  namespace Linter {`, `    interface RulesRecord extends ${presets.map(p => `${pascalize(p)}Rules`).join(', ')} {}`, `  }`, `}`]
  await fs.writeFile(path.resolve(__dirname, `../src/types/gens/eslint.ts`), eslintDts.join('\n'))
}

function react(): Promise<PresetModule> {
  return {
    // @ts-expect-error -- FIXME: `eslint-plugin-react` is not yet type definitions exporting
    react: async (): Promise<Linter.Config[]> => {
      const module_ = await import(path.resolve(__dirname, `../src/configs/react`))
      return module_['react']({ refresh: true })
    }
  }
}

async function resolvePresetModule(preset: string): Promise<PresetModule> {
  switch (preset) {
    case 'css': {
      return await css()
    }
    case 'javascript': {
      return await javascript()
    }
    case 'react': {
      return await react()
    }
    default: {
      return await import(path.resolve(__dirname, `../src/configs/${preset}`))
    }
  }
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
