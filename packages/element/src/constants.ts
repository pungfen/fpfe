import type { InjectionKey } from 'vue'

import type { XComponentSize } from './types'
import type { XFormItemValidation } from './FormItem.vue'
import type { XTabPaneConfig } from './TabPane.vue'

export const X_ELEMENT_SIZE: XComponentSize = 'default'

export const X_ELEMENT_IN_X_TABLE: InjectionKey<boolean> = Symbol('X_ELEMENT_IN_X_TABLE')
export const X_ELEMENT_IN_X_TABLE_COLUMN: InjectionKey<boolean> = Symbol('X_ELEMENT_IN_X_TABLE_COLUMN')
export const X_ELEMENT_IN_X_FORM: InjectionKey<boolean> = Symbol('X_ELEMENT_IN_X_FORM')


export const X_FORM_VALIDATIONS: InjectionKey<XFormItemValidation[]> = Symbol('X_FORM_VALIDATIONS')

export const X_TABS_PANES: InjectionKey<XTabPaneConfig[]> = Symbol('X_TABS_PANES')
