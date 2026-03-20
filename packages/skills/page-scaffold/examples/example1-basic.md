# 示例 1：基础页面生成

## 场景

用户需要快速生成一个新的供应商管理模块页面。

## 用户输入

```
生成页面 path为 /enocbootconfig/supplier
```

## 预期结果

### 列表页：`src/pages/enocbootconfig/supplier.vue`

```vue
<script setup lang="ts">
import { definePage } from 'vue-router/auto'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router/auto'
import { useUnitGlue } from '@/composables'
import XTableRequest from '@/components/advance/XTableRequest.vue'
import PageHeader from '@/components/misc/PageHeader.vue'
import { SupplierTableRequestConfig } from '@/business/supplier'

definePage({ meta: { title: '供应商管理' } })

const router = useRouter()
const route = useRoute('/enocbootconfig/supplier.[id]')
const { create, update } = useUnitGlue<components['schemas']['SupplierDto']>('/enocbootconfig/supplier')

const handleCreate = () => {
  router.push(`/enocbootconfig/supplier/${Symbol.CREATE}`)
}

const handleModify = (row: components['schemas']['SupplierDto']) => {
  router.push(`/enocbootconfig/supplier/${row.id}`)
}
</script>

<template>
  <div>
    <PageHeader title="供应商管理" />
    <XTableRequest :config="SupplierTableRequestConfig" />
  </div>
</template>
```

### 详情页：`src/pages/enocbootconfig/supplier.[id].vue`

```vue
<script setup lang="ts">
import { definePage } from 'vue-router/auto'
import { useRoute } from 'vue-router/auto'
import { useUnitGlue } from '@/composables'
import XFormRequest from '@/components/advance/XFormRequest.vue'
import { SupplierFormRequestConfig } from '@/business/supplier'

definePage({ meta: { title: '供应商管理详情' } })

const route = useRoute('/enocbootconfig/supplier.[id]')
const { read, update } = useUnitGlue<components['schemas']['SupplierDto']>('/enocbootconfig/supplier')

const supplierId = route.params.id as string

// 初始化表单数据...
</script>

<template>
  <div>
    <XFormRequest :config="SupplierFormRequestConfig" />
  </div>
</template>
```

## 验证步骤

2. [ ] 文件位置正确：`src/pages/enocbootconfig/supplier.vue`
2. [ ] DTO 类型正确导入：`SupplierDto`
3. [ ] API 路径一致：`/enocbootconfig/supplier`
4. [ ] 权限标识格式：`BAS^SUPPLIER_CREATE`
5. [ ] 路由跳转地址：`/enocbootconfig/supplier.[id]`

---

**更新时间**：2026-03-20
