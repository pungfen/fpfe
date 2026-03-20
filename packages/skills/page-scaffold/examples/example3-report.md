# 示例 3：仅生成列表页（报表场景）

## 场景

用户需要生成一个报表模块。报表通常只有列表/查看页面，没有详情编辑页。

## 用户输入

```
生成列表页 path为 /analytics/salesReport
```

## 预期结果

### 仅生成列表页：`src/pages/analytics/salesReport.vue`

```vue
<script setup lang="ts">
import { definePage } from 'vue-router/auto'
import { useUnitGlue } from '@/composables'
import XTableRequest from '@/components/advance/XTableRequest.vue'
import PageHeader from '@/components/misc/PageHeader.vue'
import { SalesReportTableRequestConfig } from '@/business/salesReport'

definePage({ meta: { title: '销售报表' } })

const { read } = useUnitGlue<components['schemas']['SalesReportDto']>('/analytics/salesReport')
</script>

<template>
  <div>
    <PageHeader title="销售报表" />
    <XTableRequest :config="SalesReportTableRequestConfig" />
  </div>
</template>
```

## 要点

- **数据来源**：GET `/analytics/salesReport`
- **无创建/编辑按钮**：报表为只读
- **权限**：仅需 `BAS^SALESREPORT_VIEW` 等查看权限
- **操作**：可能有导出、打印等操作，无编辑删除

## 验证步骤

1. [ ] 生成文件数量：1 个（仅列表页）
2. [ ] 文件路径：`src/pages/analytics/salesReport.vue`
3. [ ] DTO 类型：`SalesReportDto`
4. [ ] 无创建/修改/删除按钮
5. [ ] 权限标识适应只读场景

---

**更新时间**：2026-03-20
