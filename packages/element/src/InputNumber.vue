<script setup lang="tsx">
import type { XComponentSize } from './types'
import { ElInputNumber } from 'element-plus'
import { type HTMLAttributes, inject, type VNode } from 'vue'

import { X_FORM_ITEM_VALIDATION } from './constants'

export interface XInputNumberProps {
  align?: 'center' | 'left' | 'right'
  controls?: boolean
  disabled?: boolean
  inputmode?: HTMLAttributes['inputmode']
  max?: number
  min?: number
  placeholder?: string
  precision?: number
  size?: XComponentSize
  step?: number
  stepStrictly?: boolean
}

const { disabled = false } = defineProps<XInputNumberProps>()

const model = defineModel<number | undefined>()

const emit = defineEmits<{
  blur: [e: FocusEvent]
  focus: [e: FocusEvent]
}>()

defineSlots<{
  prefix: () => VNode
  suffix: () => VNode
}>()

const formItemValidation = inject(X_FORM_ITEM_VALIDATION, undefined)
if (formItemValidation?.required) {
  const { label, validator } = formItemValidation
  formItemValidation.validator = () => {
    if (!model.value) {
      return `请输入${label}`
    }
    return validator?.()
  }
}

const focus = (e: FocusEvent) => {
  emit('focus', e)
}

const blur = (e: FocusEvent) => {
  emit('blur', e)
}
</script>

<template>
  <ElInputNumber
    v-bind="{ ...$props, disabled }"
    v-model="model"
    @blur="blur"
    @focus="focus"
  >
    <template
      v-if="$slots.prefix"
      #prefix
    >
      <slot name="prefix" />
    </template>
    <template
      v-if="$slots.suffix"
      #suffix
    >
      <slot name="suffix" />
    </template>
  </ElInputNumber>
</template>
