<script setup lang="tsx" generic="D extends object">
import { ElFormItem } from 'element-plus'
import { inject, ref, type VNodeChild } from 'vue'
import { X_FORM_VALIDATIONS } from './constants'

export interface XFormItemProps {
  content: () => VNodeChild
  label?: string
  prop?: string
  required?: boolean
}

export interface XFormItemValidation {
  clearValidate: () => void
  label?: string
  required?: boolean
  validate: () => boolean
  validator?: () => string | void
}

const props = defineProps<XFormItemProps>()

defineSlots<{
  default: () => VNodeChild
  label: () => VNodeChild
}>()

const validations = inject(X_FORM_VALIDATIONS, undefined)

const error = ref<string | undefined>()

const validation: XFormItemValidation = {
  clearValidate() {
    error.value = undefined
  },
  label: props.label,
  required: props.required,
  validate() {
    error.value = validation.validator?.() ?? undefined
    return !error.value
  }
}

validations?.push(validation)

defineExpose({ ...validation })
</script>

<template>
  <ElFormItem v-bind="{ label, prop, required }">
    <template v-if="$slots.default">
      <slot />
    </template>
    <template v-if="$slots.label">
      <slot name="label" />
    </template>
  </ElFormItem>
</template>
