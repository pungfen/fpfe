<template>
  <ElDivider content-position="left">
    <ElText size="large">基础用法</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XButton type="text">text</XButton>
    <XButton type="default">default</XButton>
    <XButton type="plain">plain</XButton>
  </ElSpace>

  <ElDivider content-position="left">
    <ElText size="large">禁用状态</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XButton disabled type="text">text</XButton>
    <XButton disabled type="default">default</XButton>
    <XButton disabled type="plain">plain</XButton>
  </ElSpace>
</template>

<script setup lang="ts">
import { XButton } from '@fpfe/ui'
</script>
