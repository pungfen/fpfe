<script setup lang="ts">
import type { ButtonProps } from 'element-plus'

export interface EButtonProps {
  type?: ButtonProps['type']
  size?: ButtonProps['size']
}

const { type = 'default' } = defineProps<EButtonProps>()
</script>

<template>
  <ElButton v-bind="{ size, type }">
    <slot />
  </ElButton>
</template>
