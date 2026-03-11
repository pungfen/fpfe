<script setup lang="tsx">
  import { ElInputNumber } from 'element-plus'
  import type { HTMLAttributes, VNodeChild } from 'vue'
  import type { XComponentSize } from './types'

  export interface XInputNumberProps {
    placeholder?: string
    disabled?: boolean
    controls?: boolean
    precision?: number
    stepStrictly?: boolean
    align?: 'left' | 'right' | 'center'
    max?: number
    min?: number
    size?: XComponentSize
    step?: number
    inputmode?: HTMLAttributes['inputmode']
  }

  const { disabled = false } = defineProps<XInputNumberProps>()

  const model = defineModel<number>()

  const emit = defineEmits<{
    focus: [e: FocusEvent]
    blur: [e: FocusEvent]
  }>()

  defineSlots<{
    suffix: () => VNodeChild
    prefix: () => VNodeChild
  }>()

  const focus = (e: FocusEvent) => {
    emit('focus', e)
  }

  const blur = (e: FocusEvent) => {
    emit('blur', e)
  }
</script>

<template>
  <ElInputNumber v-bind="{ ...$props, disabled }" :model-value="model" @blur="blur" @focus="focus">
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-if="$slots.suffix" #suffix>
      <slot name="suffix"></slot>
    </template>
  </ElInputNumber>
</template>