# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在本项目中工作时提供指导。

## 项目概述

这是一个 **pnpm monorepo** 项目 (`fpfe`)，包含多个 Vue 3 生态系统工具包。

## 常用命令

```bash
# 安装依赖
pnpm install

# 运行测试
pnpm test              # 运行所有测试
pnpm test -- packages/oxlint-config  # 运行特定包的测试

# 代码检查
pnpm lint              # 对所有包运行 oxlint
pnpm lint:fix          # 自动修复 lint 问题
```

## 包结构

| 包名                | 路径                   | 说明                               |
| ------------------- | ---------------------- | ---------------------------------- |
| `@fp/element`       | packages/element       | Vue 3 + Element Plus 集成          |
| `@fp/generator`     | packages/generator     | 代码生成器                         |
| `@fp/oxc`           | packages/oxc           | Oxc 集成                           |
| `@fp/oxlint-config` | packages/oxlint-config | 共享的 oxlint 配置                 |
| `@fpfe/claude`      | packages/claude        | Claude 工具集成                    |
| `@fpfe/doc2html`    | packages/doc2html      | 文档转 HTML                        |
| `@fpfe/packer`      | packages/packer        | 使用 rolldown 的打包工具           |
| `@fpfe/pnpm`        | packages/pnpm          | pnpm 工作区工具                    |
| `@fpfe/tsconfig`    | packages/tsconfig      | 共享 TypeScript 配置               |
| `@fpfe/ui`          | packages/ui            | Vue 3 UI 组件（使用 Tailwind CSS） |
| `@fpfe/vite`        | packages/vite          | Vite (rolldown-vite) 集成          |

### npm 目录

| 包名                | 路径              | 说明                       |
| ------------------- | ----------------- | -------------------------- |
| `@fp/element`       | npm/element       | Element 组件库（发布版本） |
| `@fp/generator`     | npm/generator     | 代码生成器（发布版本）     |
| `@fp/oxlint-config` | npm/oxlint-config | oxlint 配置（发布版本）    |

## 编辑器配置

项目使用 **oxc** 生态系统进行代码检查和格式化：

- **VSCode 扩展**: `oxc.oxc-vscode`
- **格式化工具**: oxfmt（配置为默认）
- **保存时自动修复**: `source.fixAll.oxc` 已启用
- **类型检查**: oxc 启用类型感知模式
- **tsgo**: TypeScript Go 风格导入（可选）

### VSCode 设置

VSCode 设置位于 [.vscode/settings.json](.vscode/settings.json)。

## 技术栈

- **Monorepo**: pnpm 工作区（`packages/*` 和 `npm/*`）
- **测试**: Vitest（根目录和各包均已配置）
- **代码检查**: oxlint 支持 TypeScript
- **打包**: rolldown
- **UI 框架**: Vue 3 + Composition API
- **CSS**: Tailwind CSS v4（在 @fpfe/ui 中）
- **Element UI**: Element Plus 集成

## 关键模式

1. 每个包都有自己的 `oxlint.config.ts`，继承自 `@fp/oxlint-config`
2. 包的脚本通常包含 `lint` 和 `lint:fix`
3. 使用 `tsx` 直接运行 TypeScript 文件
4. 工作区依赖使用 `workspace:*` 协议