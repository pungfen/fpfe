<template>
  <ElDivider content-position="left">
    <ElText size="large">基础用法</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XButton type="text">text</XButton>
    <XButton>default</XButton>
    <XButton type="primary">primary</XButton>
    <XButton type="success">success</XButton>
    <XButton type="warning">warning</XButton>
    <XButton type="info">info</XButton>
    <XButton type="danger">danger</XButton>
  </ElSpace>

  <ElDivider content-position="left">
    <ElText size="large">禁用状态</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XButton type="text">text</XButton>
    <XButton>default</XButton>
    <XButton type="primary">primary</XButton>
    <XButton type="success">success</XButton>
    <XButton type="warning">warning</XButton>
    <XButton type="info">info</XButton>
    <XButton type="danger">danger</XButton>
  </ElSpace>
</template>

<script setup lang="ts">
import { XButton } from '@fpfe/element'
</script>

