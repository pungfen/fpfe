# @fpfe/element

基于 Element Plus 的 Vue 3 组件封装库，提供更简洁的 API。

## 安装

```bash
pnpm add @fpfe/element
```

## 快速开始

```ts
import { Button, Input, InputNumber } from '@fpfe/element'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
```

## 组件

- [Button](./docs/Button.md) - 按钮组件
- [Input](./docs/Input.md) - 输入框组件
- [InputNumber](./docs/InputNumber.md) - 数字输入框组件

## 国际化

支持英文和中文两种语言。

```ts
import { en, zhCn } from '@fpfe/element'

// 使用英文
app.use(ElementPlus, { locale: en })

// 使用中文
app.use(ElementPlus, { locale: zhCn })
```

## License

MIT
