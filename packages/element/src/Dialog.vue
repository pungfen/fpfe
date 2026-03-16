<script setup lang="tsx">
import type { ButtonType, DialogProps } from 'element-plus'

import { ElDialog } from 'element-plus'

export type XButtonType = ButtonType

export interface XDialogProps {
  bodyClass?: DialogProps['bodyClass']
  width?: DialogProps['width']
}

defineProps<XDialogProps>()

const visible = defineModel<boolean>()

</script>

<template>
  <ElDialog v-model="visible" v-bind="{ bodyClass, width }">
    <slot />
  </ElDialog>
</template>
