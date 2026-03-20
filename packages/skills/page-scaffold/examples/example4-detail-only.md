# 示例 4：仅生成详情页

## 场景

有时候需要仅生成详情/编辑页面，而列表页面已经存在或不需要生成。

## 用户输入

```
生成详情页 path为 /system/config
```

## 预期结果

### 仅生成详情页：`src/pages/system/config.[id].vue`

```vue
<script setup lang="ts">
import { definePage } from 'vue-router/auto'
import { useRoute } from 'vue-router/auto'
import { useUnitGlue } from '@/composables'
import XFormRequest from '@/components/advance/XFormRequest.vue'
import { ConfigFormRequestConfig } from '@/business/config'

definePage({ meta: { title: '系统配置详情' } })

const route = useRoute('/system/config.[id]')
const { read, update } = useUnitGlue<components['schemas']['ConfigDto']>('/system/config')

const configId = route.params.id as string

// 加载详情数据...
</script>

<template>
  <div>
    <XFormRequest :config="ConfigFormRequestConfig" />
  </div>
</template>
```

## 命名推导

| 名称 | 结果 |
|-----|-----|
| moduleName | `config` |
| pageParam | `configId` |
| componentPrefix | `SystemConfig` |

## API 调用

- **获取详情**：`GET /system/config/{configId}`
- **保存更新**：`PUT /system/config/{configId}`

## 使用场景

- 系统配置（单个配置对象的编辑）
- 用户个人信息编辑
- 账户设置页面
- 其他单条记录编辑

## 验证步骤

1. [ ] 生成文件数量：1 个（仅详情页）
2. [ ] 文件路径：`src/pages/system/config.[id].vue`
3. [ ] 路由参数：`[id]`
4. [ ] DTO 类型：`ConfigDto`
5. [ ] FormRequest 配置正确
6. [ ] 无列表标题/创建按钮

---

**更新时间**：2026-03-20
