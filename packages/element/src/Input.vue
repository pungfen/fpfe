<script setup lang="tsx">
import { ElInput } from 'element-plus'
import { useSlots, type VNodeChild } from 'vue'

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

const { disabled = false, type } = defineProps<InputProps>()
const slots = useSlots()

defineSlots<{
  suffix: () => VNodeChild
  prefix: () => VNodeChild
  append: () => VNodeChild
  prepend: () => VNodeChild
}>()
</script>

<template>
  <ElInput v-bind="{ disabled, type }">
    <template v-if="slots.append" #append>
      <slot name="append"></slot>
    </template>
    <template v-if="slots.prepend" #prepend>
      <slot name="prepend"></slot>
    </template>
    <template v-if="slots.prefix" #prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-if="slots.suffix" #suffix>
      <slot name="suffix"></slot>
    </template>
  </ElInput>
</template>