<script setup lang="ts">
import { XInput } from '@fpfe/ui'

const value1 = ref('')
</script>

<template>
  <ElInput placeholder="请输入"></ElInput>

  <ElDivider content-position="left">
    <ElText size="large">基础用法</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XInput v-model="value1">default</XInput>
    <span>value: {{ value1 }}</span>
  </ElSpace>
</template>
