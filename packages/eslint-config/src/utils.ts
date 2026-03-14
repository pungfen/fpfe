import process from 'node:process'

import { type Awaitable } from './types'

export const interopDefault = async <T, U = T extends { default: infer U } ? U : T>(m: Awaitable<T>): Promise<U> => {
  const resolved = await m
  return ((resolved as { default: U }).default ?? resolved) as U
}

export const importWithError = async <T>(pkg: string): Promise<T> => {
  try {
    return await import(pkg)
  } catch {
    throw new Error(
      `Failed to import ${pkg}, Please install it`
    )
  }
}

const cwd = process.cwd()
export const isPkgExists = (name: string): boolean => {
  try {
    require.resolve(name, { paths: [cwd] })
    return true
  }
  catch {
    return false
  }
}
