<script setup lang="ts">
import type { ButtonProps } from 'element-plus'

export interface EButtonProps {
  type?: ButtonProps['type']
}

const { type = 'default' } = defineProps<EButtonProps>()
</script>

<template>
  <el-button :type="type">
    <slot />
  </el-button>
</template>
