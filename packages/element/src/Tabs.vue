<script setup lang="tsx" generic="V extends string | number">
import type { XTabPaneConfig } from './TabPane.vue'
import { ElTabs, type TabsProps } from 'element-plus'
import { provide } from 'vue'
import { X_TABS_PANES } from './constants'

export interface XTabsProps {
  addable: TabsProps['addable']
  editable: TabsProps['editable']
  tabPosition: TabsProps['tabPosition']
  type?: TabsProps['type']
}

defineProps<XTabsProps>()

const model = defineModel<V>()

const panes: XTabPaneConfig[] = []
provide(X_TABS_PANES, panes)
</script>

<template>
  <ElTabs
    v-bind="{ addable, editable, tabPosition, type }"
    v-model="model"
  >
    <slot />
  </ElTabs>
</template>
