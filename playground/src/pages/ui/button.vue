<template>
  <ElDivider content-position="left">
    <ElText size="large">基础用法</ElText>
  </ElDivider>

  <ElButton plain>xx</ElButton>

  <ElSpace wrap>
    <XButton>default</XButton>
    <XButton>text</XButton>
    <XButton>plain</XButton>
  </ElSpace>

  <ElDivider content-position="left">
    <ElText size="large">禁用状态</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XButton size="sm">text</XButton>
    <XButton size="md">default</XButton>
    <XButton size="lg">plain</XButton>
  </ElSpace>
</template>

<script setup lang="ts"></script>
