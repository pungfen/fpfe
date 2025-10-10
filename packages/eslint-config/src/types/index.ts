export * from './gens/imports'
export * from './gens/javascript'
export * from './gens/jsonc'
export * from './gens/perfectionist'
export * from './gens/prettier'
export * from './gens/promise'
export * from './gens/stylistic'
export * from './gens/typescript'
export * from './gens/vue'

export * from './overrides'

/**
 * Define a promise type that can be await from T
 */
export type Awaitable<T> = T | Promise<T>

/**
 * Extract module type with interoperability for CJS `module.exports`
 */
export type InteropModuleDefault<T> = T extends { default: infer U } ? U : T
