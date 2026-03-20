# Page Scaffold Skill

基于 AI 的 Vue 页面脚手架工具，根据 API 接口路径自动生成 Vue 3 列表页和详情页。

## 🎯 功能

- ✅ 自动生成列表页 (`.vue`)
- ✅ 自动生成详情页 (`.[id].vue`)
- ✅ 支持自定义动态表格 code
- ✅ 完整的 DTO 类型推导
- ✅ 权限标识自动生成
- ✅ Form 表单项自动排除系统字段

## 📋 快速开始

### 触发词

输入以下内容之一即可触发 skill：

```
生成页面 path为 /admin/user
生成列表页 path为 /admin/config code为CFGFD
生成详情页 path为 /admin/role
生成页面 path为 /analytics/report 注意 没有详情页
```

### 生成结果

如果 API 配置正确，会生成：

```
✅ src/pages/enocbootconfig/inventory.vue
✅ src/pages/enocbootconfig/inventory.[id].vue
```

## 📖 完整文档

见 [SKILL.md](./SKILL.md)

### 核心内容

| 章节 | 说明 |
|-----|------|
| 何时使用 | 触发条件 |
| 输入参数提取 | 如何解析用户输入 |
| 命名推导规则 | path 转换规则 |
| 核心执行流程 | 6 步生成流程 |
| 替换规则清单 | 所有需要替换的内容 |
| 列表页/详情页生成清单 | 分阶段 checklist |
| 完整示例 | 4 个真实场景 |
| 验证检查清单 | 生成后的验证 |

## 🔧 使用场景

### 场景 1：快速生成新模块

```
用户：生成页面 path为 /enocbootconfig/goodsCategory
结果：
  ✅ src/pages/enocbootconfig/goodsCategory.vue (列表页)
  ✅ src/pages/enocbootconfig/goodsCategory.[id].vue (详情页)
```

### 场景 2：只生成列表页

```
用户：生成列表页 path为 /enocbootconfig/report
结果：
  ✅ src/pages/enocbootconfig/report.vue
```

### 场景 3：自定义表格 code

```
用户：生成列表页 path为 /enocbootconfig/inventory code为INVFD
结果：
  ✅ src/pages/enocbootconfig/inventory.vue (使用 INVFD 作为表格 code)
```

## 📊 版本

| 版本 | 日期 | 说明 |
|-----|------|------|
| **v2.0.0** | 2026-03-20 | 重新命名：page-scaffold，模板改为 list.vue / detail.[id].vue |

见 [CHANGELOG.md](./CHANGELOG.md) 了解详细更新内容。

## 🚨 前置要求

### 项目要求

- ✅ enocboot-spyman 架构
- ✅ `src/pages/common/list.vue` 模板存在
- ✅ `src/pages/common/detail.[id].vue` 模板存在

### API 要求

- ✅ `api.d.ts` 存在且包含 GET 接口
- ✅ API 响应包含 DTO 定义

### 手动要求

虽然 skill 自动生成大部分代码，但建议检查：

- [ ] DTO 是否正确导入
- [ ] API 路径是否一致
- [ ] 权限标识是否正确
- [ ] Form 表单项是否完整

## ❓ 常见问题

### Q：如何定制生成的页面样式？

A：Skill 基于现有模板生成。如需定制：
1. 修改 `src/pages/common/supplier.vue` 模板
2. 再次运行 skill，新页面会使用新模板

### Q：如何处理特殊的 API 路由？

A：Skill 假设 RESTful 路由。对于特殊路由：
1. 生成基础页面
2. 手动调整 API 路径即可

### Q：能否生成其他框架的页面？

A：当前仅支持 Vue 3 + enocboot-spyman 架构。
其他框架的支持需要创建新模板。

### Q：生成的权限标识规则是什么？

A：遵循 `BAS^{MODEL}_ACTION` 格式：
- `BAS^SUPPLIER_CREATE` - 创建
- `BAS^SUPPLIER_MODIFY` - 修改
- `BAS^SUPPLIER_ENABLE` - 启用
- 等等

### Q：如何更新 skill 到最新版本？

A：
```bash
# 如果使用 submodule
cd vendor/ai-skills
git pull origin main
# 或检出特定版本
git checkout v1.0.0

# 提交更新
cd ../..
git add vendor/ai-skills
git commit -m "chore: update ai-skills to v1.0.0"
```

## 🔗 相关资源

- [enocboot-spyman 项目指南](../../CONTRIBUTING.md)
- [Copilot Skill 最佳实践](https://github.com/your-org/ai-skills/wiki)
- [Vue 3 官方文档](https://vuejs.org/)

## 📞 获取帮助

- 🐛 发现 bug？提交 Issue
- 💡 有改进建议？讨论或提 PR
- ❓ 有问题？查看本文档或相关 issues

## 📄 License

MIT

---

**最后更新**：2026-03-20
