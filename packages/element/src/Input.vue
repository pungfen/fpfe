<script setup lang="tsx" generic="MV extends string | number">
  import { ElInput } from 'element-plus'
  import { type VNodeChild } from 'vue'
  import type { XInputType } from './types'

  export interface XInputProps {
    disabled?: boolean
    type?: XInputType
  }

  defineSlots<{
    suffix: () => VNodeChild
    prefix: () => VNodeChild
    append: () => VNodeChild
    prepend: () => VNodeChild
  }>()
  const { disabled = false, type = 'text' } = defineProps<XInputProps>()

  defineEmits<{
    focus: [e: FocusEvent]
    blur: [e: FocusEvent]
  }>()

  const model = defineModel<MV>({ default: '', required: false })
</script>

<template>
  <ElInput
    v-bind="{ disabled, type }"
    v-model="model"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
  >
    <template v-if="$slots.append" #append>
      <slot name="append"></slot>
    </template>
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend"></slot>
    </template>
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-if="$slots.suffix" #suffix>
      <slot name="suffix"></slot>
    </template>
  </ElInput>
</template>