import type { Awaitable, InteropModuleDefault } from './types'

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from './globs'

/**
 * resolve module with interop default
 * @param mod - a module
 * @returns resolved module
 */
export const interopDefault = async <T>(mod: Awaitable<T>): Promise<InteropModuleDefault<T>> => {
  const resolved = await mod
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (resolved as any).default ?? resolved
}

export const loadPlugin = async <T>(name: string): Promise<T> => {
  const mod = await import(name).catch(error => {
    console.error(error)
    throw new Error(`Failed to load eslint plugin '${name}'. Please install it!`)
  })
  return interopDefault(mod) as Promise<T>
}

export const pascalize = (value: string): string => {
  return value.replaceAll(/\w+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase())
}

/**
 * get TypeScript parser
 *
 * @description get the parser, which is `typescript-eslint` parser
 *
 * @returns {Promise<typeof import('typescript-eslint')['parser']>} TypeScript parser
 */
export async function getTypeScriptParser(): Promise<
  (typeof import('typescript-eslint'))['parser']
> {
  const ts = await loadPlugin<typeof import('typescript-eslint')>('typescript-eslint')
  return ts.parser
}

/**
 * get glob source files
 *
 * @param {boolean} useTypeScript - use TypeScript, default `false`
 * @returns {string[]} files
 */
function getGlobSourceFiles(useTypeScript = false): string[] {
  return [GLOB_JS, GLOB_JSX, ...(useTypeScript ? [GLOB_TS, GLOB_TSX] : [])]
}
