<script setup lang="tsx">
import { ElInput, type InputProps, type InputType } from 'element-plus'
import { inject, type VNodeChild } from 'vue'

import { X_FORM_ITEM_VALIDATION } from './constants'

export interface XInputProps {
  disabled?: InputProps['disabled']
  size?: InputProps['size']
  type?: InputProps['type']
}

export type XInputType = InputType

defineSlots<{
  append: () => VNodeChild
  prefix: () => VNodeChild
  prepend: () => VNodeChild
  suffix: () => VNodeChild
}>()
defineProps<XInputProps>()

defineEmits<{
  blur: [e: FocusEvent]
  focus: [e: FocusEvent]
}>()

const model = defineModel<number | string | undefined>()

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
</script>

<template>
  <ElInput v-bind="{ disabled, type, size }" v-model="model" @blur="$emit('blur', $event)" @focus="$emit('focus', $event)">
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <template v-if="$slots.suffix" #suffix>
      <slot name="suffix" />
    </template>
  </ElInput>
</template>
