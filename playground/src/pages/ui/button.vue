<script setup lang="ts">
import { XButton } from '@fpfe/ui'
</script>

<template>
  <div class="flex gap-2">
    <div class="ibgp-50 h-10 w-10">xx</div>
    <div class="ibgp-100 h-10 w-10">xx</div>
    <div class="ibgp-200 h-10 w-10">xx</div>
    <div class="ibgp-300 h-10 w-10">xx</div>
  </div>

  <ElDivider content-position="left">
    <ElText size="large">实心按钮</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XButton>default</XButton>
    <XButton color="success">success</XButton>
    <XButton color="warning">warning</XButton>
    <XButton color="danger">danger</XButton>
  </ElSpace>

  <ElDivider content-position="left">
    <ElText size="large">线条按钮</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XButton type="ring">default</XButton>
    <XButton type="ring" color="success">success</XButton>
    <XButton type="ring" color="warning">warning</XButton>
    <XButton type="ring" color="danger">danger</XButton>
  </ElSpace>

  <ElDivider content-position="left">
    <ElText size="large">文字按钮</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XButton type="text">default</XButton>
    <XButton type="text" color="success">success</XButton>
    <XButton type="text" color="warning">warning</XButton>
    <XButton type="text" color="danger">danger</XButton>
  </ElSpace>

  <ElDivider content-position="left">
    <ElText size="large">禁用状态</ElText>
  </ElDivider>

  <ElSpace wrap>
    <XButton disabled>disabled</XButton>
    <XButton disabled color="success">success</XButton>
    <XButton disabled color="warning">warning</XButton>
    <XButton disabled color="danger">danger</XButton>

    <XButton disabled type="ring">disabled</XButton>
    <XButton disabled type="ring" color="success">success</XButton>
    <XButton disabled type="ring" color="warning">warning</XButton>
    <XButton disabled type="ring" color="danger">danger</XButton>

    <XButton disabled type="text">disabled</XButton>
    <XButton disabled type="text" color="success">success</XButton>
    <XButton disabled type="text" color="warning">warning</XButton>
    <XButton disabled type="text" color="danger">danger</XButton>
  </ElSpace>
</template>
