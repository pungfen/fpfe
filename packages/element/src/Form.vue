<script setup lang="tsx" generic="D extends object">
import type { XFormItemValidation } from './FormItem.vue'
import { ElForm } from 'element-plus'
import { provide, useTemplateRef, type VNodeChild } from 'vue'
import { X_FORM_VALIDATIONS } from './constants'

export interface XFormItemProps {
  content?: () => VNodeChild
  label?: string
  labelPosition?: '' | 'left' | 'right' | 'top'
  labelWidth?: number | string
  required?: boolean
}

export interface XFormProps<D> {
  content?: (scope: { data: D }) => VNodeChild
  data?: D[]
  disabled?: boolean
  inline?: boolean
  labelPosition?: 'left' | 'right' | 'top'
  labelSuffix?: string
  labelWidth?: number | string
}

const { content, data } = defineProps<XFormProps<D>>()

const form = useTemplateRef('form')

const Content = () => content?.({ data: data ?? {} } as { data: D })

const validations = [] as XFormItemValidation[]
provide(X_FORM_VALIDATIONS, validations)
const validate = () => validations.every(item => item.validate())
const resetFields = () => validations.forEach(it => it.clearValidate())

defineExpose({ data, resetFields, validate })
</script>

<template>
  <ElForm
    ref="form"
    v-bind="{ model: data, disabled, inline, labelPosition, labelWidth, labelSuffix }"
  >
    <Content />
  </ElForm>
</template>
