<script setup lang="tsx" generic="D extends object">
import { ElForm } from 'element-plus'
import { useTemplateRef, type VNodeChild } from 'vue'

export interface FormProps<D> {
  data?: D[]
  disabled?: boolean
  inline?: boolean
  labelSuffix?: string
  labelWidth?: number | string
  labelPosition?: 'left' | 'right' | 'top'
  content?: (scope: { data: D }) => VNodeChild
}

const { disabled = false, content, data } = defineProps<FormProps<D>>()

const form = useTemplateRef('form')

const Content = () => content?.({ data: data ?? {} } as { data: D })

const validate = async () => {
  await form.value?.validate()
}

const resetFields = () => {
  form.value?.resetFields()
}

const clearValidate = () => {
  form.value?.clearValidate()
}

defineExpose({ data, clearValidate, validate, resetFields })
</script>

<template>
  <ElForm ref="form" v-bind="{ model: data, disabled, inline, labelPosition, labelWidth, labelSuffix }">
    <Content />
  </ElForm>
</template>