import type { InjectionKey } from 'vue'
import type { XElementSize } from './types'

export const X_ELEMENT_SIZE: XElementSize = 'default'

export const X_ELEMENT_IN_X_TABLE: InjectionKey<boolean> = Symbol('X_ELEMENT_IN_X_TABLE')
export const X_ELEMENT_IN_X_TABLE_COLUMN: InjectionKey<boolean> = Symbol(
  'X_ELEMENT_IN_X_TABLE_COLUMN'
)
export const X_ELEMENT_IN_X_FORM: InjectionKey<boolean> = Symbol('X_ELEMENT_IN_X_FORM')