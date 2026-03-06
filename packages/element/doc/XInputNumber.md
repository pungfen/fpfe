# InputNumber

数字输入框组件。

## 使用示例

```vue
<script setup lang="ts">
import { InputNumber } from '@fpfe/element'
</script>

<template>
  <InputNumber :min="0" :max="100" />
  <InputNumber :controls="false" placeholder="无控制按钮" />
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| min | `number` | - | 最小值 |
| max | `number` | - | 最大值 |
| disabled | `boolean` | `false` | 是否禁用 |
| controls | `boolean` | `true` | 是否显示控制按钮 |

## Slots

| 名称 | 说明 |
|------|------|
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| decrease-icon | 减少按钮图标 |
| increase-icon | 增加按钮图标 |
