<script setup lang="tsx">
import { ElTabPane, type TabPaneProps } from 'element-plus'
import { inject } from 'vue'
import { X_TABS_PANES } from './constants'

export interface XTabPaneConfig {
  label?: string
  name?: number | string
}

export interface XTabPaneProps {
  closable: TabPaneProps['closable']
  disabled: TabPaneProps['disabled']
  label: TabPaneProps['label']
  lazy: TabPaneProps['lazy']
  name: TabPaneProps['name']
}

const { label, name } = defineProps<XTabPaneProps>()

const pane = {
  label,
  name
}

const panes = inject(X_TABS_PANES)

panes?.push(pane)

defineExpose({ ...pane })

</script>

<template>
  <ElTabPane
    v-bind="{ label, name, disabled, closable, lazy }"
  >
    <slot />
  </ElTabPane>
</template>
