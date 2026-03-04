<script setup lang="tsx" generic="D extends object">
import { ElForm } from 'element-plus'
import { useTemplateRef, type VNodeChild } from 'vue'

export interface FormProps<D> {
  data?: D[]
  disabled?: boolean
  inline?: boolean
  labelWidth?: number | string
  labelPosition?: 'left' | 'right' | 'top'
  content?: (scope: { data: D }) => VNodeChild
}

const { disabled = false, content, data } = defineProps<FormProps<D>>()

const form = useTemplateRef('form')

const Content = () => content?.({ data: data ?? {} } as { data: D })

defineExpose({ data })
</script>

<template>
  <ElForm ref="form" v-bind="{ ...$props, disabled }">
    <Content />
  </ElForm>
</template>