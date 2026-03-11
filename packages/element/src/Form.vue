<script setup lang="tsx" generic="D extends object">
import { ElForm } from 'element-plus'
import { useTemplateRef, type VNodeChild } from 'vue'

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

const { content, data, disabled = false } = defineProps<XFormProps<D>>()

const form = useTemplateRef('form')

const Content = () => content?.({ data: data ?? {} } as { data: D })
</script>

<template>
  <ElForm
    ref="form"
    v-bind="{ model: data, disabled, inline, labelPosition, labelWidth, labelSuffix }"
  >
    <Content />
  </ElForm>
</template>
