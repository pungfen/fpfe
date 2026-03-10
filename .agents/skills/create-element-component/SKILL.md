---
name: create-element-component
description: 在 packages/element 中创建新的 Element Plus 封装组件。用于创建 XButton, XInput, XSelect, XTable 等以 X 开头的 Vue 组件封装。当用户提到添加新的 Element Plus 组件、创建 Xxx 组件、或在 element 包中新增组件时使用此技能。
---

# Create Element Plus Component

在 `packages/element` 中创建新的 Element Plus 组件封装。

## 组件命名规则

| 规则 | 示例 |
|------|------|
| 文件名 | `Xxx.vue`（大写首字母驼峰）|
| 组件名 | `Xxx`（X + 组件名）|
| Props 接口 | `XxxProps` |

## Props 处理规范

### 透传常用 Props

以下常用 props 需要透传到 ElXxx：

```ts
disabled?: boolean
size?: 'large' | 'default' | 'small'
type?: ButtonType / InputType 等
loading?: boolean
```

### 内部 Props（不暴露）

以下 props 不需要用户传入，将通过 ProvideConfig 统一设置：

- **Table**: `border`, `stripe`
- **其他组件**: 类似由全局配置控制的样式属性

### 数据 Props（泛型）

需要泛型的组件，data 统一命名为 `data`：

| 组件 | 泛型 | data 类型 |
|------|------|-----------|
| XForm | `<T>` | `data?: T` |
| XTable | `<T>` | `data?: T[]` |
| XSelect | `<D, V, MV>` | `data?: D[]` |
| XCascader | `<T>` | `data?: T[]` |

## 代码模板

### 简单透传组件

```vue
<script setup lang="tsx">
import { ElButton, type ButtonType } from 'element-plus'

export interface XButtonProps {
  disabled?: boolean
  text?: boolean
  link?: boolean
  type?: ButtonType
}

const { disabled = false, type = 'default' } = defineProps<XButtonProps>()

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()
</script>

<template>
  <ElButton v-bind="{ type, text, link, disabled }" @click="emit('click', $event)">
    <slot></slot>
  </ElButton>
</template>
```

### 数据组件（带泛型）

```vue
<script setup lang="tsx" generic="T">
import { ElTable, type TableProps } from 'element-plus'

export interface XTableProps<T> {
  data?: T[]
  // 其他常用 props
  height?: string | number
  maxHeight?: string | number
}

const props = defineProps<XTableProps<T>>()

defineEmits<{
  // 常用事件
}>()
</script>

<template>
  <ElTable :data="props.data" v-bind="{ ... }">
    <slot></slot>
  </ElTable>
</template>
```

## 实现步骤

1. **确定组件类型**：
   - 简单透传：Dialog, Drawer, Message 等
   - 数据组件：Form, Table, Select, Cascader 等

2. **查找 Element Plus 类型**：
   - 从 `element-plus` 导入对应的类型（如 `ButtonType`, `InputType`）
   - 导入组件（如 `ElButton`, `ElInput`）

3. **编写 Props 接口**：
   - 透传常用 props
   - 排除内部 props（border, stripe 等）
   - 数据组件添加泛型和 data prop

4. **处理 v-model**：
   - 使用 `defineModel<T>()` 实现 v-model
   - 如需转换，使用 `computed` 包装

5. **透传 Slots**：
   - 使用 `<slot>` 透传默认插槽
   - 使用具名插槽透传具名插槽

## 参考文件

- `packages/element/src/Button.vue` - 简单透传示例
- `packages/element/src/Input.vue` - 简单透传 + v-model 示例
- `packages/element/src/Select.vue` - 数据组件 + 复杂逻辑示例
- `packages/element/src/Table.vue` - Table 封装示例
- `packages/element/src/Form.vue` - Form 封装示例
