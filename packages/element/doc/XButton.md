# Button

按钮组件。

## 使用示例

```vue
<script setup lang="ts">
import { Button } from '@fpfe/element'
</script>

<template>
  <Button type="primary">主要按钮</Button>
  <Button disabled>禁用按钮</Button>
  <Button text>文字按钮</Button>
</template>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text' \| ''` | `'default'` | 按钮类型 |
| disabled | `boolean` | `false` | 是否禁用 |
| text | `boolean` | `false` | 是否为文字按钮 |
| link | `boolean` | `false` | 是否为链接按钮 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| click | `(e: MouseEvent)` | 点击按钮时触发 |
