export type Arrayable<T> = T | T[]

export type Awaitable<T> = Promise<T> | T

export type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N

export type IsKeyValues<T, K = string> = IfAny<
  T,
  false,
  T extends object ? (keyof T extends K ? true : false) : false
>
export type Lazy<T> = () => Promise<T>
