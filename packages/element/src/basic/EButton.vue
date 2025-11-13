<template>
  <el-button :type="type">
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
import type { ButtonProps } from 'element-plus'

export interface EButtonProps {
  type?: ButtonProps['type']
}

const { type = 'default' } = defineProps<EButtonProps>()
</script>