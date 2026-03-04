<script setup lang="tsx" generic="MV extends string">
import { ElInput } from 'element-plus'
import { type VNodeChild } from 'vue'

export interface InputProps {
  disabled?: boolean
  type?:
    | 'text'
    | 'textarea'
    | 'number'
    | 'password'
    | 'email'
    | 'search'
    | 'tel'
    | 'url'
    | (string & NonNullable<unknown>)
}

defineSlots<{
  suffix: () => VNodeChild
  prefix: () => VNodeChild
  append: () => VNodeChild
  prepend: () => VNodeChild
}>()
const { disabled = false, type } = defineProps<InputProps>()

defineEmits<{
  'focus': [e: FocusEvent]
  'blur': [e: FocusEvent]
}>()

const model = defineModel<MV>()
</script>

<template>
  <ElInput v-bind="{ disabled, type }" v-model="model" @blur="$emit('blur', $event)" @focus="$emit('focus', $event)">
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