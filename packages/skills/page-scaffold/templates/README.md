# 模板库

这个目录包含 page-scaffold Skill 使用的标准模板文件。

## 📂 可用模板

### `list.vue` + `detail.[id].vue`

标准的列表页和详情页完整模板。

**特点**：
- ✅ 完整的权限检查 (`BAS^MODULE_ACTION`)
- ✅ 启用/禁用/删除操作
- ✅ 表单保存与保存退出
- ✅ create/edit 二合一处理

**适用于**：
- 标准的 CRUD 管理模块
- 需要启用/禁用功能的模块

**使用方式**：

选项 1：直接复制
```bash
# 复制到你的项目
cp list.vue your-project/src/pages/common/
cp detail.[id].vue your-project/src/pages/common/
```

选项 2：指定模板参数
```
生成页面 path为 /admin/user template为list
```

## 🔄 如何使用这些模板

### 从 ai-skills 项目中

```bash
# Via submodule（推荐）
mkdir -p your-project/src/pages/common
ln -s ../../../vendor/ai-skills/skills/page-scaffold/templates/list.vue \
  your-project/src/pages/common/list.vue
ln -s ../../../vendor/ai-skills/skills/page-scaffold/templates/detail.[id].vue \
  your-project/src/pages/common/detail.[id].vue
```

### 直接从文件系统

如果你在本地开发：
```bash
# 在 ai-skills 仓库中
mkdir -p your-project/src/pages/common
ln -s ../../../vendor/ai-skills/skills/page-scaffold/templates/list.vue \
  your-project/src/pages/common/list.vue
ln -s ../../../vendor/ai-skills/skills/page-scaffold/templates/detail.[id].vue \
  your-project/src/pages/common/detail.[id].vue
```

## 📋 模板内容说明

### 列表页 (`list.vue`)

```vue
<script setup lang="tsx">
// 1. 权限检查
user.hasAccessRight('BAS^MODULE_CREATE')

// 2. 表格配置和数据加载
<XTableRequestConfig
  type="INVFD"  // 可自定义
  request={() => useRequest('/api/module', 'get')}  // path 会被替换
/>

// 3. 操作列（启用、禁用、编辑、删除）
// 确保每个操作都检查相应权限
</>
```

**需要替换的部分**：
- `'/api/module'` → 实际的 API 路径
- `'INVFD'` → 自定义的表格 code
- `'BAS^MODULE_*'` → 权限标识
- 组件名称 `*` → 新模块名

### 详情页 (`detail.[id].vue`)

```vue
<script setup lang="tsx">
// 1. 参数提取
const moduleId = route.params.id as string

// 2. create 检测
if (moduleId !== Symbol.CREATE) {
  // 加载详情数据
}

// 3. 保存逻辑（create + update）
save(() =>
  useRequest(
    '/api/module',
    dto.value?.id ? 'put' : 'post',  // 自动判断
    { payload: dto.value! }
  )
)
</>
```

**需要替换的部分**：
- API 路径
- DTO 类型
- 权限标识
- 表单配置

## ✨ 高级用法

### 添加新模板变体

如果需要特殊场景的模板（如：只读视图、报表页），可以创建新文件：

```
templates/
├── list.vue                 # 通用列表页
├── detail.[id].vue          # 通用详情页
├── enocboot-list.vue       # enocboot-spyman 项目专用
├── enocboot-detail.[id].vue
└── README.md
```

然后通过参数指定：
```
生成页面 path为 /admin/sales-report template为enocboot-list
```

### 为特定项目定制

每个项目可以维护自己的模板副本：
```
your-project/src/pages/common/
├── list.vue                  # 项目定制版本（覆盖默认）
├── detail.[id].vue           # 项目定制版本（覆盖默认）
└── user.vue                  # 兼容 template=user 参数
```

## 🔗 相关资源

- [SKILL.md](../SKILL.md) — Skill 执行规则
- [README.md](../README.md) — Skill 使用说明
- [examples/](../examples/) — 使用场景示例

---

**最后更新**：2026-03-20
