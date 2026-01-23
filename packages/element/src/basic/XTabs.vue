<script lang="tsx">
import { defineComponent, provide, inject } from 'vue'

import {
  ElTabs,
  ElTabPane,
  type TabPaneProps,
  type TabsProps
} from 'element-plus'

import { X_TAB_PANES, X_TAB_PANE } from '../internal/constants'

export interface XTabPaneProps extends Partial<TabPaneProps> {}

export interface XTabPaneInstance extends Pick<
  XTabPaneProps,
  'label' | 'name'
> {}

export const XTabPane = defineComponent(
  (props: XTabPaneProps, { slots }) => {
    const instance: XTabPaneInstance = {
      ...props
    }

    const panes = inject(X_TAB_PANES, undefined)
    panes?.push(instance)

    provide(X_TAB_PANE, instance)

    return () => <ElTabPane {...props}>{{ ...slots }}</ElTabPane>
  },
  {
    props: ['label', 'name', 'closable', 'lazy', 'disabled']
  }
)
</script>

<script setup lang="tsx" generic="V extends string | number">
export interface XTabsProps extends Partial<TabsProps> {}

const props = defineProps<XTabsProps>()

const emit = defineEmits<{
  tabChange: [name: V]
  tabRemove: [name: V]
}>()

const model = defineModel<V>()

const panes = [] as XTabPaneInstance[]
provide(X_TAB_PANES, panes)
</script>

<template>
  <ElTabs
    v-bind="props"
    v-model="model"
    @tab-change="(name) => emit('tabChange', name as V)"
    @tab-remove="(name) => emit('tabRemove', name as V)"
  >
    <slot></slot>
  </ElTabs>
</template>
