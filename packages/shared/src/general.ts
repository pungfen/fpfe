export const hasChanged = (value: any, oldValue: any): boolean => !Object.is(value, oldValue)

export const objectToString = Object.prototype.toString
export const toTypeString = (value: unknown) => objectToString.call(value)
export const toRawType = (value: unknown) => toTypeString(value).slice(8, -1)

export const isArray: typeof Array.isArray = Array.isArray
export const isMap = (val: unknown): val is Map<any, any> => toTypeString(val) === '[object Map]'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object'
export const isFunction = (val: unknown): val is Function => val !== null && typeof val === 'function'

export const isIntegerKey = (key: unknown): boolean => {
  return isString(key) && key !== 'NaN' && !key.startsWith('-') && '' + parseInt(key, 10) === key
}

export const NO = () => false
export const isOn = (key: string): boolean => {
  return (
    key.charCodeAt(0) === 111
    && /* o */ key.charCodeAt(1) === 110 /* n */ &&
    // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97)
  )
}

let _globalThis: any
export const getGlobalThis = (): any => {
  return _globalThis || (_globalThis = globalThis ?? self ?? window ?? global ?? {})
}

export const extend: typeof Object.assign = Object.assign

const hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwn = (val: object, key: string | symbol): key is keyof typeof val => hasOwnProperty.call(val, key)
