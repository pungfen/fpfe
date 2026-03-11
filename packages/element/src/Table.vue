<script setup lang="tsx" generic="D extends Record<string, unknown>">
  import { ElTable, ElTableColumn, type TableColumnCtx } from 'element-plus'
  import { type FunctionalComponent, type VNodeChild, provide, useTemplateRef } from 'vue'
  import { X_ELEMENT_IN_X_TABLE } from './constants'

  export interface XTableColumnProps<D> {
    label?: string
    prop?: string
    width?: number
    fixed?: 'left' | 'right'
    content?: (scope: { index: number; row: D }) => VNodeChild
    header?: (scope: { column: XTableColumnProps<D> }) => VNodeChild
    type?: 'default' | 'selection'
  }

  export interface TableProps<D> {
    data?: D[]
    columns?: XTableColumnProps<D>[]
    height?: number
  }

  const { columns, data } = defineProps<TableProps<D>>()

  const emit = defineEmits<{
    rowClick: [row: D]
    selectionChange: [rows: D[]]
    headerDragend: [newWidth: number, oldWidth: number, column: TableColumnCtx]
  }>()

  const table = useTemplateRef('table')

  defineExpose({
    toggleRowSelection: (row: D, selected?: boolean, ignoreSelectable?: boolean) =>
      table.value?.toggleRowSelection(row, selected, ignoreSelectable)
  })

  provide(X_ELEMENT_IN_X_TABLE, true)

  const XTableColumn: FunctionalComponent<XTableColumnProps<D>> = (props) => (
    <ElTableColumn label={props.label} prop={props.prop} width={props.width} fixed={props.fixed}>
      {{
        default: ({ $index, row }: { $index: number, row: D }) => props.content?.({ index: $index, row }),
        header: () => props.header?.({ column: { ...props } }) ?? props.label
      }}
    </ElTableColumn>
  )
</script>

<template>
  <ElTable
    ref="table"
    :data="data"
    @row-click="(row: D) => $emit('rowClick', row)"
    @selection-change="(rows: D[]) => $emit('selectionChange', rows)"
    @header-dragend="
      (newWidth, oldWidth, column) => $emit('headerDragend', newWidth, oldWidth, column)
    "
  >
    <XTableColumn v-for="column of columns" :label="column.label" />
  </ElTable>
</template>