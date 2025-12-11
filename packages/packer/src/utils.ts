export const isArray: typeof Array.isArray = Array.isArray
export const isObject = (val: unknown): val is Record<string, unknown> => val !== null && typeof val === 'object'
export const isFuntion = (val: unknown): val is () => unknown => typeof val === 'function'
export const isString = (val: unknown): val is string => typeof val === 'string'

export const stringify = (payload: unknown): string => {
  if (isObject(payload)) {
    return ''
  }
  else if (isFuntion(payload)) {
    return payload.toString()
  }
  else {
    return JSON.stringify(payload)
  }
}
