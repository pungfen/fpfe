<template>
  <ElDivider content-position="left">
    <ElText size="large">基础用法</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XInput v-model="value"></XInput>
  </ElSpace>
</template>

<script setup lang="ts">
import { XInput } from '@fpfe/element'

const value = ref('')
</script>
