# fpfe

个人前端技术栈工具库 (fp = 名字缩写, fe = frontend)

## 简介

这是一个基于 pnpm workspace 的 monorepo 项目，用于管理和封装日常工作中常用的前端工具和组件。

## 技术栈

- **Monorepo**: pnpm workspaces
- **打包工具**: rolldown
- **代码检查**: oxlint
- **测试**: Vitest
- **UI 框架**: Vue 3 + Composition API
- **组件库**: Element Plus

## 包结构

### packages/ (开发中的包)

| 包名 | 说明 |
|------|------|
| `@fp/composable` | Vue 3 Composable 工具库，类似 VueUse，封装工作中常用的 Composition API |
| `@fp/element` | Vue 3 + Element Plus 组件库，对 Element Plus 的二次封装 |
| `@fp/fetch` | 封装浏览器 Fetch API |
| `@fpfe/doc2html` | 文档转 HTML 工具（基于 mammoth.js） |
| `@fpfe/eslint-config` | 个人 ESLint Flat Config 配置 |
| `@fpfe/packer` | 基于 Vite 的封装，提供极简配置即可运行 dev/build |
| `@fpfe/pnpm` | pnpm workspace 工具函数，如获取工作区所有包 |
| `@fpfe/prettier-config` | Prettier 配置 |
| `@fpfe/tsconfig` | 共享 TypeScript 配置，类似 @vue/tsconfig |

## 快速开始

```bash
# 安装依赖
pnpm install

# 代码检查
pnpm lint

# 格式化代码
pnpm format

# 运行测试
pnpm test

# 构建所有包
pnpm build
```

## 各包详细说明

### @fp/composable

类似 VueUse 的工具库，封装工作中常用的 Vue 3 Composition API。

### @fp/element

对 Element Plus 的二次封装组件库，提供更符合个人开发习惯的组件用法。

### @fp/fetch

封装一层浏览器原生 Fetch API，提供更便捷的请求处理。

### @fpfe/doc2html

将 .doc 文档转换为 HTML，基于 [mammoth.js](https://github.com/mwilliamson/mammoth.js) 实现。

### @fpfe/eslint-config

个人 ESLint Flat Config 配置，类似 @antfu/eslint-config 的风格。

### @fpfe/packer

基于 Vite 的封装工具，解决实际项目中 vite.config.ts 配置日益复杂的问题，提供极简配置即可运行 dev 和 build。

### @fpfe/pnpm

pnpm workspace 工具函数库，包含获取当前工作区所有包等常用功能。

### @fpfe/prettier-config

Prettier 共享配置。

### @fpfe/tsconfig

共享 TypeScript 配置包，类似 @vue/tsconfig。

## License

MIT
