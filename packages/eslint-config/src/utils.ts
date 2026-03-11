import process from 'node:process'

import { Awaitable } from './types'

export const interopDefault = async <T, U = T extends { default: infer U } ? U : T>(m: Awaitable<T>): Promise<U> => {
  const resolved = await m
  return ((resolved as { default: U }).default ?? resolved) as U
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
