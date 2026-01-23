<script setup lang="tsx">
import type { Component } from 'vue'

export interface XDialogProps {
  title?: string
  bodyClass?: string
}

defineProps<XDialogProps>()

const model = defineModel<boolean>()
const { header, footer } = defineSlots<{
  default?: () => Component
  header?: () => Component
  footer?: () => Component
}>()
</script>

<template>
  <ElDialog
    v-model="model"
    :title="title"
    :body-class="`flex flex-col ${bodyClass}`"
  >
    <template v-if="header" #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
    <template v-if="footer" #footer>
      <slot name="footer"></slot>
    </template>
  </ElDialog>
</template>
