<script setup lang="tsx">
import { useSlots, type VNodeChild } from 'vue'

export interface InputNumberProps {
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

const { disabled = false, type } = defineProps<InputNumberProps>()
const slots = useSlots()

defineSlots<{
  suffix: () => VNodeChild
  prefix: () => VNodeChild
  decreaseIcon: () => VNodeChild
  increaseIcon: () => VNodeChild
}>()
</script>

<template>
  <ElInputNumber v-bind="{ disabled, type }">
    <template v-if="slots.decreaseIcon" #decrease-icon>
      <slot name="decreaseIcon"></slot>
    </template>
    <template v-if="slots.increaseIcon" #increase-icon>
      <slot name="increaseIcon"></slot>
    </template>
    <template v-if="slots.prefix" #prefix>
      <slot name="prefix"></slot>
    </template>
    <template v-if="slots.suffix" #suffix>
      <slot name="suffix"></slot>
    </template>
  </ElInputNumber>
</template>