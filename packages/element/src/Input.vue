<script setup lang="tsx">
import type { VNodeChild } from 'vue'

import { ElInput } from 'element-plus'

import type { XComponentSize, XInputType } from './types'

export interface XInputProps {
  disabled?: boolean
  size?: XComponentSize
  type?: XInputType
}

defineSlots<{
  append: () => VNodeChild
  prefix: () => VNodeChild
  prepend: () => VNodeChild
  suffix: () => VNodeChild
}>()
const { disabled = false, type = 'text' } = defineProps<XInputProps>()

defineEmits<{
  blur: [e: FocusEvent]
  focus: [e: FocusEvent]
}>()

const model = defineModel<number | string>()
</script>

<template>
  <ElInput
    v-bind="{ disabled, type }"
    v-model="model"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
  >
    <template
      v-if="$slots.append"
      #append
    >
      <slot name="append" />
    </template>
    <template
      v-if="$slots.prepend"
      #prepend
    >
      <slot name="prepend" />
    </template>
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
  </ElInput>
</template>
