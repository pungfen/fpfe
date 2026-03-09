# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在本项目中工作时提供指导。

## 项目概述

这是一个 **pnpm monorepo** 项目 (`fpfe`)，包含多个 Vue 3 生态系统工具包。

## 常用命令

```bash
# 安装依赖
pnpm install

# 代码检查与格式化
pnpm lint              # 对所有包运行 oxlint
pnpm lint:fix          # 自动修复 lint 问题
pnpm format            # 使用 oxfmt 格式化代码
pnpm format:check      # 检查代码格式

# 运行测试
vitest run             # 运行所有测试
vitest run packages/oxc # 运行特定包的测试

# 构建
pnpm npm:element       # 构建 @fp/element 到 npm/element
```

## 包结构

### packages/（开发中的包）

| 包名             | 路径               | 说明                            |
| ---------------- | ------------------ | ------------------------------- |
| `@fp/element`    | packages/element   | Vue 3 + Element Plus 组件库     |
| `@fp/generator`  | packages/generator | 代码生成器                      |
| `@fp/oxc`        | packages/oxc       | Oxc 工具集成                    |
| `@fpfe/claude`   | packages/claude    | Claude 工具集成                 |
| `@fpfe/doc2html` | packages/doc2html  | 文档转 HTML                     |
| `@fpfe/packer`   | packages/packer    | 基于 rolldown 的打包工具        |
| `@fpfe/pnpm`     | packages/pnpm      | pnpm 工作区工具                 |
| `@fpfe/tsconfig` | packages/tsconfig  | 共享 TypeScript 配置            |
| `@fpfe/ui`       | packages/ui        | Vue 3 UI 组件库（Tailwind CSS） |
| `@fpfe/vite`     | packages/vite      | Vite (rolldown-vite) 集成       |
| `@fpfe/fetch`    | packages/fetch     | fetch api                       |

### npm/（发布版本）

| 包名            | 路径          | 说明                       |
| --------------- | ------------- | -------------------------- |
| `@fp/element`   | npm/element   | Element 组件库（发布版本） |
| `@fp/generator` | npm/generator | 代码生成器（发布版本）     |

### .agents/skills/

项目使用 skills 配置，位于 [.agents/skills/](.agents/skills/) 目录。

## 编辑器配置

项目使用 **oxc** 生态系统进行代码检查和格式化：

- **VSCode 扩展**: `oxc.oxc-vscode`
- **格式化工具**: oxfmt（配置为默认）
- **保存时自动修复**: `source.fixAll.oxc` 已启用
- **类型检查**: oxc 启用类型感知模式

### VSCode 设置

VSCode 设置位于 [.vscode/settings.json](.vscode/settings.json)。

## 技术栈

- **Monorepo**: pnpm 工作区（`packages/*` 和 `npm/*`）
- **测试**: Vitest
- **代码检查**: oxlint 支持 TypeScript
- **打包**: rolldown
- **UI 框架**: Vue 3 + Composition API
- **CSS**: Tailwind CSS v4（在 @fpfe/ui 中）
- **Element UI**: Element Plus 集成

## 关键模式

1. 使用 `tsx` 直接运行 TypeScript 文件
2. 工作区依赖使用 `workspace:*` 协议