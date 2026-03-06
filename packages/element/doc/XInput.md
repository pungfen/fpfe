# Input

输入框组件。

## 使用示例

```vue
<script setup lang="ts">
import { Input } from '@fpfe/element'
</script>

<template>
  <Input placeholder="请输入内容" />
  <Input type="textarea" placeholder="多行文本" />
  <Input type="password" placeholder="密码输入" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `'text' \| 'textarea' \| 'number' \| 'password' \| 'email' \| 'search' \| 'tel' \| 'url'` | `'text'` | 输入框类型 |
| disabled | `boolean` | `false` | 是否禁用 |

## Slots

| 名称 | 说明 |
|------|------|
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
