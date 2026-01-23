import type { B, Fn, Match, O, Pipe, T, U } from 'hotscript'

export {}

declare global {
  export { ComponentExposed } from 'vue-component-type-helpers'

  export interface paths {}
  export interface LookupDto {}
  export interface Paging {
    pageCount: number
    itemCount: number
    pageIndex: number
    pageSize: number
  }

  export type CouldBeArray<T> = T | T[]
  export type HttpMethod = 'get' | 'delete' | 'post' | 'put'
  export type IfNever<T, Y = true, N = false> = [T] extends [never] ? Y : N
  export type AreAllPropertiesOptional<
    T,
    U = {
      [K in keyof T]-?: undefined extends T[K] ? true : false
    }
  > = U[keyof U] extends true ? true : false
  export type NonOptionalKeys<T> = Pipe<
    T,
    [O.Required, O.OmitBy<B.Equals<never>>, O.Keys]
  >

  export type LiteralString<T> = T extends string
    ? string extends T
      ? string
      : T
    : string

  export type UrlCouldFetchWith<
    M extends HttpMethod,
    T = { [K in keyof paths]: paths[K] extends Record<M, any> ? K : never }
  > = T[keyof T]

  export type UrlCouldGet = UrlCouldFetchWith<'get'>

  interface IfNullableFn extends Fn {
    return: [this['arg0']] extends [undefined] ? never : this['arg0']
  }

  export type ResolvePathFromOperation<T> = Pipe<
    T,
    [O.Get<'parameters.path'>, IfNullableFn]
  >

  export type ResolveQueryFromOperation<T> = Pipe<
    T,
    [
      O.RequiredDeep,
      O.Get<'parameters.query'>,
      O.MapValues<
        Match<
          [
            Match.With<LookupDto, string>,
            Match.With<(LookupDto | undefined)[], string | string[]>,
            Match.With<string, string>,
            Match.With<(string | undefined)[], string[]>,
            Match.With<number, number>,
            Match.With<(number | undefined)[], number[]>
          ]
        >
      >,
      O.Partial
    ]
  >
  export type ResolveResponseFromOperation<T> = Pipe<
    T,
    [O.Get<'responses'>, O.Values, U.ToTuple, T.Head, O.Get<'content.*/*'>]
  >
  export type ResolvePayloadFromOperation<T> = Pipe<
    T,
    [O.Get<'requestBody.content.application/json.data.[0]'>, U.NonNullable]
  >
  export type ResolveDataFromOperation<T> = Pipe<
    ResolveResponseFromOperation<T>,
    [O.Get<'data.[0]'>, U.Exclude<string>, U.NonNullable]
  >
  export type ResolveDataFromResponse<T> = Pipe<
    T,
    [O.Get<'data.[0]'>, U.Exclude<string>, U.NonNullable]
  >
}
