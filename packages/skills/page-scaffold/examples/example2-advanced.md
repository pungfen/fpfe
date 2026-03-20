# 示例 2：自定义表格 Code 和排除详情页

## 场景

用户需要生成一个商品分类列表页，使用自定义的表格 code，且这个模块没有详情页（只需要列表查看）。

## 用户输入

```
生成列表页 path为 /enocbootconfig/goodsCategory code为CGTYFD
```

或

```
生成页面 path为 /enocbootconfig/goodsCategory 注意 没有详情页 code为CGTYFD
```

## 关键参数

| 参数 | 值 |
|-----|-----|
| path | `/enocbootconfig/goodsCategory` |
| code | `CGTYFD` |
| 类型 | 仅列表页（关键词"列表页"或"没有详情页"） |

## 命名推导结果

| 名称 | 结果 |
|-----|-----|
| moduleName | `goodsCategory` |
| moduleNameUpper | `GOODSCATEGORY` |
| pagePath | `enocbootconfig/goodsCategory` |
| componentPrefix | `EnocbootconfigGoodsCategory` |
| fileName | `goodsCategory` |
| pathParam | `goodsCategoryId` |

## 预期结果

### 仅生成列表页：`src/pages/enocbootconfig/goodsCategory.vue`

```vue
<script setup lang="ts">
import { definePage } from 'vue-router/auto'
import { useRouter } from 'vue-router'
import { useUnitGlue } from '@/composables'
import XTableRequest from '@/components/advance/XTableRequest.vue'
import PageHeader from '@/components/misc/PageHeader.vue'
import { GoodsCategoryTableRequestConfig } from '@/business/goodsCategory'

definePage({ meta: { title: '商品分类管理' } })

const router = useRouter()
const { create, update, delete: destroy } = useUnitGlue<components['schemas']['GoodsCategoryDto']>('/enocbootconfig/goodsCategory')

const handleCreate = () => {
  // 可能打开对话框创建或跳转到表单
  // 处理方式由 XTableRequest 配置决定
}
</script>

<template>
  <div>
    <PageHeader title="商品分类管理" />
    <XTableRequest :config="GoodsCategoryTableRequestConfig" />
  </div>
</template>
```

## 特殊处理

### 表格 Code 替换

模板中的：
```vue
<XTableRequest :config="GoodsCategoryTableRequestConfig" type="SUPFD" />
```

替换为：
```vue
<XTableRequest :config="GoodsCategoryTableRequestConfig" type="CGTYFD" />
```

### 权限标识

所有权限标识使用 `GOODSCATEGORY`：
- `BAS^GOODSCATEGORY_CREATE`
- `BAS^GOODSCATEGORY_MODIFY`
- `BAS^GOODSCATEGORY_DELETE`
- `BAS^GOODSCATEGORY_ENABLE`

### API 路径

所有 API 调用使用 `/enocbootconfig/goodsCategory`：
- GET：`/enocbootconfig/goodsCategory` （列表）
- POST：`/enocbootconfig/goodsCategory` （创建）
- PUT：`/enocbootconfig/goodsCategory` （修改）
- DELETE：`/enocbootconfig/goodsCategory/{goodsCategoryId}` （删除）

## 验证步骤

1. [ ] 生成文件数量：1 个（仅列表页）
2. [ ] 文件位置：`src/pages/enocbootconfig/goodsCategory.vue`
3. [ ] 表格 code：`CGTYFD`
4. [ ] DTO 类型：`GoodsCategoryDto`
5. [ ] 权限标识：`BAS^GOODSCATEGORY_*`
6. [ ] 无详情页路由跳转

---

**更新时间**：2026-03-20
