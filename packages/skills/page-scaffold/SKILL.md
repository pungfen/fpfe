---
name: page-scaffold
description: Vue 页面脚手架工具。根据 API 接口路径自动生成列表页和详情页。当用户说"生成页面"、"生成列表页"、"生成详情页"或类似表述时触发此 skill。
---

# Page Scaffold Skill

根据 API 接口路径自动生成 enocboot-spyman 的 Vue 3 列表页和详情页。

## 何时使用

用户说以下内容时触发：
- "生成页面 path为 /xxx/yyy"
- "生成列表页 path为 /xxx/yyy"
- "生成详情页 path为 /xxx/yyy"
- "生成页面 path为 /xxx/yyy 注意 没有详情页"
- "生成页面 path为 /xxx/yyy template为src/pages/template"（指定模板路径）
- "生成页面 path为 /xxx/yyy 用以下模板..."（提供内联模板）

## 输入参数提取

### 参数识别规则

| 参数 | 识别方式 | 示例 |
|-----|---------|------|
| **path** | `path为/...` 或 `path 为/...` | `/enocbootconfig/supplier` |
| **code** | `code为XXX` 或 `code 为XXX` | `SUPFD` 或 `USERFD` |
| **template** | `template为...` 或 `模板为...`（可选） | `src/pages/template` 或 `user` |
| **类型** | 关键词匹配优先级如下 | 见下表 |

### 生成类型判断（优先级排序）

| 关键词 | 优先级 | 行为 | 生成内容 |
|--------|--------|------|---------|
| "列表页" | 1 | 只生成列表页 | `.vue` 文件 |
| "详情页" | 2 | 只生成详情页 | `.[id].vue` 文件 |
| "没有详情页" / "只有列表页" | 3 | 只生成列表页 | `.vue` 文件 |
| （以上都无） | 默认 | 同时生成 | `.vue` + `.[id].vue` |

## 命名推导规则

给定输入 `path = /enocbootconfig/supplier`，推导以下值：

| 名称 | 推导方法 | 结果 |
|-----|---------|------|
| **moduleName** | path 末尾段（小写） | `supplier` |
| **pagePath** | path 去掉前缀 `/` | `enocbootconfig/supplier` |
| **componentPrefix** | path 完整转 PascalCase | `EnocbootconfigSupplier` |
| **fileName** | 模块名小写 | `supplier` |
| **pathParam** | 模块名 + Id 拼接 | `supplierId` |
| **moduleNameUpper** | 模块名全大写 | `SUPPLIER` |

## 核心执行流程（6 步）

### Step 1: 解析用户输入
- 提取 `path` 参数
- 提取 `code` 参数（若无则默认 `SUPFD`）
- 根据关键词判断生成类型

### Step 2: 查找 GET 接口
- 读取 `api.d.ts` 的 `paths` 对象
- 精确查找 `paths["/enocbootconfig/supplier"]`
- 检查是否存在 `get` 方法
- **若无 GET 接口**：告知用户，询问是否继续生成

### Step 3: 提取 DTO 类型
- 从 GET 接口操作获得 operation 名称
- 查找 `operations[operationName].responses["200"].content["*/*"]` 中的 schema
- 提取并简化 DTO 名称（`DataResponseSupplierDto` → `SupplierDto`）

### Step 4: 读取或生成模板文件

**情况 A：用户指定了 template 参数**
- 相对路径：查找 `src/pages/{template}.vue` 和 `src/pages/{template}.[id].vue`
- 示例：`template为user` → 查找 `src/pages/user.vue`

**情况 B：用户提供了内联模板代码**
- 直接使用用户提供的模板代码

**情况 C：无指定（默认值）**
- **列表页模板**：`src/pages/common/list.vue`
- **详情页模板**：`src/pages/common/detail.[id].vue`

**情况 D：模板文件不存在**
- 提示用户可选方案：
  1. 指定其他存在的模板
  2. 提供内联模板代码
  3. 按照"模板最小化结构"创建新模板

### Step 5: 执行模板替换
按照"替换规则清单"章节内容，替换模板中的所有标记。

### Step 6: 生成文件
- **列表页**：`src/pages/{pagePath}.vue`
- **详情页**：`src/pages/{pagePath}.[id].vue`

## 替换规则清单

所有模板中需要替换的内容（除非特别标注）：

| 模板标记 | 替换为 | 示例 |
|---------|--------|------|
| `definePage({ meta: { title: '供应商模块' } })` | 根据 path 推断标题 (+详情页加"详情") | `供应商管理` / `供应商管理详情` |
| `useRouter()` | 保持不变 | — |
| `useRoute('/common/supplier.[id]')` | `useRoute('/{pagePath}.[id]')` | `useRoute('/enocbootconfig/supplier.[id]')` |
| `useUnitGlue<components['schemas']['SupplierDto']>()` | 替换 DTO | `useUnitGlue<components['schemas']['InventoryDto']>()` |
| `/enocbootconfig/supplier` (GET 列表) | 用户 path | `/enocbootconfig/inventory` |
| `/common/supplier/${CREATE}` (路由跳转) | `/{pagePath}/${CREATE}` | `/enocbootconfig/inventory/${CREATE}` |
| `BAS^SUPPLIER_*` (权限标识) | `BAS^{moduleNameUpper}_*` | `BAS^INVENTORY_CREATE` |
| `/enocbootconfig/supplier/enable/{supplierId}` (enable API) | 保持结构，替换 path 和参数名 | `/enocbootconfig/inventory/enable/{inventoryId}` |
| `type="SUPFD"` (表格 code) | `type="{code}"` | `type="INVFD"` |

## 列表页生成清单 (.vue)

生成以下组件：
- `{ComponentPrefix}Header` — 页头，包含「创建」按钮
- `{ComponentPrefix}TableRequest` — 表格容器

**需要替换的内容** (Checklist)：
- [ ] `definePage` 中的标题
- [ ] `useRoute` 的路由地址
- [ ] `useUnitGlue` 的 DTO 类型
- [ ] GET 列表 API 路径
- [ ] 创建按钮的路由跳转地址
- [ ] 所有权限标识（`CREATE`, `MODIFY`, `ENABLE`, `DISABLE`, `DELETE`）
- [ ] enable/disable API 路径与参数名
- [ ] `XTableRequestConfig` 的 `type` 属性

**使用的权限标识**：
- `BAS^{UPPER}_CREATE` — 创建按钮
- `BAS^{UPPER}_MODIFY` — 编辑（若有）
- `BAS^{UPPER}_ENABLE` — 启用
- `BAS^{UPPER}_DISABLE` — 禁用
- `BAS^{UPPER}_DELETE` — 删除

## 详情页生成清单 (.[id].vue)

生成以下组件：
- `{ComponentPrefix}DetailHeader` — 页头，包含「保存」「保存退出」按钮
- `{ComponentPrefix}DetailFormRequest` — 表单

**需要替换的内容** (Checklist)：
- [ ] `definePage` 中的标题（加"详情"后缀）
- [ ] `useRoute` 的路由地址（包含 `[id]`）
- [ ] `useUnitGlue` 的 DTO 类型
- [ ] GET 详情 API 路径 + 路径参数（`{pathParam}`）
- [ ] POST/PUT 保存 API 路径
- [ ] 权限标识（`MODIFY`）
- [ ] Form 表单项列表

**Form 表单项生成规则**：
- 从 DTO 定义中提取字段
- **排除以下系统字段**：`id`, `status`, `createByName`, `updateByName`, `createDate`, `updateDate`
- 在 `{ComponentPrefix}FormRequestItems.select([...])` 中列出
- 示例：`.select(['供应商名称', '联系人', '联系电话'])`

## 获取模板文件（推荐方案）

### 从 ai-skills 仓库获取

最简单的方法是从 ai-skills 中获取已准备好的标准模板。

**方案 A：通过 Submodule（推荐）**

```bash
# 1. 添加 ai-skills 为 submodule
git submodule add https://github.com/your-org/ai-skills.git vendor/ai-skills

# 2. 创建符号链接到标准模板
mkdir -p src/pages/common
ln -s ../../../vendor/ai-skills/skills/page-scaffold/templates/list.vue \
  src/pages/common/list.vue
ln -s ../../../vendor/ai-skills/skills/page-scaffold/templates/detail.[id].vue \
  src/pages/common/detail.[id].vue

# 3. 现在 Skill 可以直接使用
# 生成页面 path为 /your/module
```

**方案 B：直接复制**

```bash
# 从 ai-skills/skills/page-scaffold/templates/ 中复制
cp ai-skills/skills/page-scaffold/templates/list.vue your-project/src/pages/common/
cp ai-skills/skills/page-scaffold/templates/detail.[id].vue your-project/src/pages/common/
```

**为什么选择 ai-skills 中的模板？**
- ✅ 完整的权限检查实现
- ✅ 真实项目验证过的代码
- ✅ 包含所有常见操作（create、edit、enable、disable、delete）
- ✅ 最小化依赖，易于定制
- ✅ 多个项目可共享同一份维护

### 文件位置说明

标准模板位于：
```
ai-skills/
└── skills/
    └── page-scaffold/
        └── templates/
            ├── list.vue              # 列表页模板
            ├── detail.[id].vue       # 详情页模板
            └── README.md             # 模板使用说明
```

完整文档见：[ai-skills/skills/page-scaffold/templates/README.md](https://github.com/your-org/ai-skills/tree/main/skills/page-scaffold/templates)

---

## 模板创建指南（对于高级定制）

如果 ai-skills 中的标准模板不符合需求，可以按以下步骤创建定制模板：

### 列表页模板：`src/pages/common/supplier.vue`

```vue
<script setup lang="ts">
import { definePage } from 'vue-router/auto'
import { useRouter } from 'vue-router'
import { useUnitGlue } from '@/composables'
import XTableRequest from '@/components/advance/XTableRequest.vue'
import PageHeader from '@/components/misc/PageHeader.vue'
import { SupplierTableRequestConfig } from '@/business/supplier'

definePage({ meta: { title: '供应商模块' } })

const router = useRouter()
const { create, update, delete: destroy } = useUnitGlue<components['schemas']['SupplierDto']>('/api/supplier')

const handleCreate = () => {
  router.push(`/common/supplier/${Symbol.CREATE}`)
}
</script>

<template>
  <div>
    <PageHeader title="供应商管理" />
    <XTableRequest :config="SupplierTableRequestConfig" type="SUPFD" />
  </div>
</template>
```

### 详情页模板：`src/pages/common/supplier.[id].vue`

```vue
<script setup lang="ts">
import { definePage } from 'vue-router/auto'
import { useRoute } from 'vue-router/auto'
import { useUnitGlue } from '@/composables'
import XFormRequest from '@/components/advance/XFormRequest.vue'
import { SupplierFormRequestConfig } from '@/business/supplier'

definePage({ meta: { title: '供应商模块详情' } })

const route = useRoute('/common/supplier.[id]')
const { read, update } = useUnitGlue<components['schemas']['SupplierDto']>('/api/supplier')

const supplierId = route.params.id as string
</script>

<template>
  <div>
    <XFormRequest :config="SupplierFormRequestConfig" />
  </div>
</template>
```

### 创建后

1. 确认文件位置：`src/pages/common/supplier.vue` 和 `src/pages/common/supplier.[id].vue`
2. 验证导入路由是否正确
3. 再次运行生成命令

## 特殊情况处理

### ❌ 缺失 GET 接口

输出信息：
```
⚠️ 未找到 /enocbootconfig/supplier 的 GET 接口，无法生成列表页

继续询问？
→ 是否继续生成？可能需要手动修改 API 路径
```

### ❌ 无法提取 DTO

输出信息：
```
❌ 无法从 GET 接口响应解析 DTO 类型

建议：
→ 检查 api.d.ts 中该接口的返回值类型定义
→ 确保响应包含 schema 定义
```

### ❌ 模板文件缺失

**场景**：默认模板 (`supplier.vue`, `supplier.[id].vue`) 不存在

**告知用户**：
```
⚠️ 未找到默认模板：
- src/pages/common/supplier.vue
- src/pages/common/supplier.[id].vue

请选择以下方式之一：

1️⃣ 指定现有模板：生成页面 path为 /xxx/yyy template为user
2️⃣ 提供内联模板：生成页面 path为 /xxx/yyy 用以下Vue模板...
3️⃣ 创建模板文件：按照文档创建 supplier.vue / supplier.[id].vue
```

**推荐方式**：
1. 如果项目中已有相似模块，使用 template 参数指定
2. 如果是全新项目，参考"模板最小化结构"创建一份

## 完整示例

### 例 1：生成完整模块（列表 + 详情）

**用户输入**：
```
生成页面 path为 /enocbootconfig/inventory
```

**执行过程**：
1. 解析参数：path=`/enocbootconfig/inventory`, 类型=`list+detail`, code=`SUPFD`（默认）
2. 查找 `/enocbootconfig/inventory` 的 GET 接口 → ✅ 找到
3. 提取 DTO → `InventoryDto`
4. 加载模板 → `supplier.vue` + `supplier.[id].vue`
5. 按照替换规则执行替换
6. 写入两个文件

**生成结果**：
```
✅ src/pages/enocbootconfig/inventory.vue
✅ src/pages/enocbootconfig/inventory.[id].vue
```

### 例 2：仅生成列表页 + 自定义 code

**用户输入**：
```
生成列表页 path为 /enocbootconfig/inventory code为INVFD
```

**执行过程**：
1. 解析参数：path=`/enocbootconfig/inventory`, 类型=`list-only`, code=`INVFD`
2. 查找 GET 接口 → ✅ 找到
3. 提取 DTO → `InventoryDto`
4. 加载列表页模板
5. 替换 code：`SUPFD` → `INVFD`
6. 执行其他替换

**生成结果**：
```
✅ src/pages/enocbootconfig/inventory.vue
```

### 例 3：生成但排除详情页

**用户输入**：
```
生成页面 path为 /enocbootconfig/report 注意 没有详情页
```

**执行过程**：
1. 解析参数：type=`list-only`（"没有详情页"优先级 3）
2. 其余步骤同例 1，仅生成列表页

**生成结果**：
```
✅ src/pages/enocbootconfig/report.vue
```

### 例 4：仅生成详情页

**用户输入**：
```
生成详情页 path为 /enocbootconfig/inventory
```

**执行过程**：
1. 解析参数：type=`detail-only`
2. 查找 GET 接口（用于推导 pathParam）
3. 加载详情页模板
4. 执行替换

**生成结果**：
```
✅ src/pages/enocbootconfig/inventory.[id].vue
```

### 例 5：指定自定义模板（其他项目）

**场景**：新项目中没有 supplier.vue 模板，但有现成的 user.vue

**用户输入**：
```
生成页面 path为 /admin/permission template为user
```

**执行过程**：
1. 解析参数：path=`/admin/permission`, template=`user`, 类型=`list+detail`
2. 加载模板：`src/pages/user.vue` + `src/pages/user.[id].vue`
3. 替换规则同第 1 步（替换 user → permission）
4. 生成文件

**生成结果**：
```
✅ src/pages/admin/permission.vue
✅ src/pages/admin/permission.[id].vue
```

**要点**：
- `template为user` 指向 `src/pages/user.vue` 而非 `src/pages/common/supplier.vue`
- 其他替换规则保持不变
- 适用于已有模板库的项目

## 验证检查清单

生成完成后，验证以下事项：
- [ ] 文件位置：`src/pages/enocbootconfig/*.vue` ✓
- [ ] DTO 导入：`useUnitGlue<{DTO}>()` 正确 ✓
- [ ] API 路径：GET、POST、PUT 路径一致 ✓
- [ ] 权限格式：`BAS^模块_操作` ✓
- [ ] 路由地址：`[id]` 包含于详情页 ✓
- [ ] 组件名：使用 PascalCase ✓
- [ ] Form 字段：排除系统字段 ✓
- [ ] 表格 code：正确应用于 `type` 属性 ✓
