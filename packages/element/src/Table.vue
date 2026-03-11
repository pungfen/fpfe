<script setup lang="tsx" generic="D extends Record<string, unknown>">
import { ElTable, ElTableColumn, type TableColumnCtx } from 'element-plus'
import { type CSSProperties, type FunctionalComponent, provide, useTemplateRef, type VNodeChild } from 'vue'

import type { XComponentSize } from './types'

import { X_ELEMENT_IN_X_TABLE } from './constants'

export interface TableProps<D> {
  cellClassName?: ((scope: { column: TableColumnCtx, columnIndex: number, row: D, rowIndex: number }) => string) | string
  cellStyle?: ((scope: { column: TableColumnCtx, columnIndex: number, row: D, rowIndex: number }) => CSSProperties) | CSSProperties
  columns?: XTableColumnProps<D>[]
  data?: D[]
  fit?: boolean
  height?: number
  rowClassName?: ((scope: { row: D, rowIndex: number }) => string) | string
  rowStyle?: ((scope: { row: D, rowIndex: number }) => CSSProperties) | CSSProperties
  showOverflowTooltip?: boolean
  showSummary?: boolean
  size?: XComponentSize
  spanMethod?: (scope: { column: TableColumnCtx, columnIndex: number, row: D, rowIndex: number }) => number[] | undefined | { colspan: number, rowspan: number }
}

export interface XTableColumnProps<D> {
  content?: (scope: { index: number, row: D }) => VNodeChild
  fixed?: 'left' | 'right'
  header?: (scope: { column: XTableColumnProps<D> }) => VNodeChild
  label?: string
  prop?: string
  selectable?: (row: D, index: number) => boolean
  type?: 'index' | 'selection'
  width?: number
}

const { columns, data, showOverflowTooltip = true } = defineProps<TableProps<D>>()

const emit = defineEmits<{
  headerDragend: [newWidth: number, oldWidth: number, column: TableColumnCtx]
  rowClick: [row: D]
  selectionChange: [rows: D[]]
}>()

const table = useTemplateRef('table')

defineExpose({
  clearSelection: () => table.value?.clearSelection(),
  toggleRowSelection: (row: D, selected?: boolean, ignoreSelectable?: boolean) =>
    table.value?.toggleRowSelection(row, selected, ignoreSelectable)
})

provide(X_ELEMENT_IN_X_TABLE, true)

const XTableColumn: FunctionalComponent<XTableColumnProps<D>> = props => (
  <ElTableColumn fixed={props.fixed} label={props.label} prop={props.prop} type={props.type} width={props.width}>
    {{
      default: ({ $index, row }: { $index: number, row: D }) => props.content?.({ index: $index, row }),
      header: () => props.header?.({ column: { ...props } })
    }}
  </ElTableColumn>
)
</script>

<template>
  <ElTable
    ref="table"
    v-bind="{
      data,
      height,
      size,
      fit,
      rowClassName,
      rowStyle,
      cellClassName,
      cellStyle,
      showSummary,
      showOverflowTooltip,
      spanMethod
    }"
    @row-click="(row: D) => emit('rowClick', row)"
    @selection-change="(rows: D[]) => emit('selectionChange', rows)"
    @header-dragend="
      (newWidth, oldWidth, column) => emit('headerDragend', newWidth, oldWidth, column)
    "
  >
    <XTableColumn
      v-for="column of columns"
      v-bind="column"
    />
  </ElTable>
</template>
