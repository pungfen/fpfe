# @fpfe/element

基于 Element Plus 的 Vue 3 组件封装库，提供更简洁的 API。

## 安装

```bash
pnpm add @pungfe/element
```

## 快速开始

```ts
import { XButton, XInput, XInputNumber } from '@pungfe/element'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
```

## 组件

- [XButton](./docs/XButton.md) - 按钮组件
- [XInput](./docs/XInput.md) - 输入框组件
- [XInputNumber](./docs/XInputNumber.md) - 数字输入框组件

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