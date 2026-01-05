<script setup lang="ts">
import type { ButtonProps } from 'element-plus'

export interface EButtonProps {
  type?: ButtonProps['type']
}

const { type = 'default' } = defineProps<EButtonProps>()
</script>

<template>
  <ElButton :type="type">
    <slot />
  </ElButton>
</template>
