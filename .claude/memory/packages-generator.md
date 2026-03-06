# @fp/generator (代码生成器)

根据 OpenAPI/Swagger 文档生成 Vue 前端代码的库。

## 包位置

`packages/generator`

## 核心文件

| 文件                    | 说明           |
| ----------------------- | -------------- |
| `src/index.ts`          | 导出入口       |
| `src/types.ts`          | 类型定义       |
| `src/resolve.ts`        | OpenAPI 解析器 |
| `src/template.ts`       | Vue 模板生成器 |
| `src/CodeGenerator.vue` | 在线生成器组件 |

## 导出内容

```typescript
import {
  CodeGenerator,
  parseOpenAPI,
  generateIndex,
  generateDetail,
  generateTypes
} from '@fp/generator'
```

## 功能

- 解析 OpenAPI/Swagger 文档
- 根据 path 自动识别 CRUD 接口
- 选择字段生成表单
- 生成 index.vue (列表页)
- 生成 detail.vue (详情/编辑弹窗)
- 生成 TypeScript 类型定义

## 使用方式

```typescript
// 在业务项目路由中使用
{
  path: '/generator',
  component: CodeGenerator,
  props: {
    swaggerUrl: 'http://localhost:8720/v3/api-docs/xxx'
  }
}
```

## 依赖

- vue: ^3.5.0
- element-plus: >=2.0.0 (peer)
- openapi-typescript: ^7.13.0

## 常用命令

```bash
pnpm install
pnpm test
pnpm lint

```