# Changelog

所有重要的项目更改都会记录在此文件中。

格式遵循 [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)，
版本遵循 [Semantic Versioning](https://semver.org/spec/v2.0.0.html)。

## [2.0.0] - 2026-03-20

### Changed
- Renamed from `generator-page` to `page-scaffold` (better reflects generic scaffolding nature)
- Renamed template files: `supplier.vue` → `list.vue`, `supplier.[id].vue` → `detail.[id].vue`
- Updated all documentation and examples to use new names
- Refocused on template agnostic approach

---

## [1.0.0] - 2026-03-20 (Deprecated)

### Added
- 初始版本发布
- 支持生成 Vue 3 列表页 (`.vue`)
- 支持生成 Vue 3 详情页 (`.[id].vue`)
- 支持仅生成列表页
- 支持仅生成详情页
- 支持排除详情页（仅列表页）
- 自动提取 API GET 接口
- 自动提取 DTO 类型
- 自动推导命名规则（moduleName, pagePath, componentPrefix, pathParam, moduleNameUpper）
- 集中化替换规则表
- 权限标识自动生成 (BAS^MODULE_ACTION 格式)
- Form 表单项自动排除系统字段
- 支持自定义动态表格 code
- 完整的 6 步执行流程
- 4 个真实场景示例
- 生成后验证检查清单
- 特殊情况处理（缺失 GET 接口、无法提取 DTO、模板缺失）

### Changed
- N/A

### Fixed
- N/A

### Documentation
- 完整的 SKILL.md 文档（10 层架构）
- README.md 使用指南
- CHANGELOG.md 更新日志
- 贡献指南

---

## 计划中的功能

### v1.1.0 (计划中)
- [ ] 支持更多 API 路由模式
- [ ] 支持 GraphQL API
- [ ] 支持生成测试文件
- [ ] 支持自定义组件前缀
- [ ] 支持禁用特定权限标识

### v2.0.0 (计划中)
- [ ] 支持 React 框架
- [ ] 支持 Angular 框架
- [ ] 配置文件支持
- [ ] 插件系统

---

## 如何更新版本

1. 在 CHANGELOG.md 中新增 `[X.Y.Z] - YYYY-MM-DD` 部分
2. 更新 SKILL.md 的 description（如需）
3. 提交更改并创建 git tag

```bash
git tag vX.Y.Z
git push origin vX.Y.Z
```

---

**最后更新**：2026-03-20
