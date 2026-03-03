# @fp/element 组件分析

## Button.vue

路径: `packages/element/src/Button.vue`

### 组件概述

- 对 Element Plus `ElButton` 的包装器组件
- 使用 Vue 3 + TypeScript + TSX 写法

### Props 接口

```typescript
export interface ButtonProps {
  disabled?: boolean // 禁用状态
  text?: boolean // 文字按钮样式
  link?: boolean // 链接按钮样式
  type?: 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text' | '' // 按钮类型
}
```

### 测试要点

1. **Props 传递测试**: disabled, text, link, type 是否正确传递给 ElButton
2. **插槽测试**: 默认插槽内容正确渲染
3. **事件测试**: click 事件是否正常触发

---

## Input.vue

路径: `packages/element/src/Input.vue`

### 组件概述

- 对 Element Plus `ElInput` 的包装器

### 测试要点

1. **Props 传递**: v-model, placeholder, disabled, type 等
2. **事件测试**: update:modelValue, input, change 等事件

---

## InputNumber.vue

路径: `packages/element/src/InputNumber.vue`

### 组件概述

- 对 Element Plus `ElInputNumber` 的包装器

### 测试要点

1. **Props 传递**: v-model, min, max, step, disabled 等
2. **事件测试**: update:modelValue, change 等事件