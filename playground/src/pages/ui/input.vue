<script setup lang="ts">
import { XInput } from '@fpfe/ui'
</script>

<template>
  <ElInput placeholder="请输入"></ElInput>

  <ElDivider content-position="left">
    <ElText size="large">基础用法</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XInput>default</XInput>
  </ElSpace>
</template>
