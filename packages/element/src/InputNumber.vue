<script setup lang="tsx">
import type { HTMLAttributes, VNodeChild } from 'vue'

import { ElInputNumber } from 'element-plus'

import type { XComponentSize } from './types'

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

const model = defineModel<number>()

const emit = defineEmits<{
  blur: [e: FocusEvent]
  focus: [e: FocusEvent]
}>()

defineSlots<{
  prefix: () => VNodeChild
  suffix: () => VNodeChild
}>()

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
    :model-value="model"
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
