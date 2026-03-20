<script setup lang="tsx">
import { definePage } from 'vue-router/auto'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router/auto'
import { useUserStore } from '@/composables'
import { useRequest, useUnitGlue } from '@/composables'
import XFormRequest from '@/components/advance/XFormRequest.vue'
import XButton from '@/components/misc/XButton.vue'
import XButtonAsync from '@/components/misc/XButtonAsync.vue'
import PageHeader from '@/components/misc/PageHeader.vue'
import { EnocbootconfigSupplierFormRequestConfig } from '@/business/supplier'

definePage({ meta: { title: '供应商模块详情' } })

const router = useRouter()
const route = useRoute('/common/supplier.[id]')

const user = useUserStore()
const { dto, form, id, save, delete: destroy } =
  useUnitGlue<components['schemas']['SupplierDto']>()

const supplierId = route.params.id as string

// 初始化加载
const initData = async () => {
  if (supplierId && supplierId !== Symbol.CREATE) {
    const res = await useRequest('/enocbootconfig/supplier/{supplierId}', 'get', {
      path: { supplierId }
    })
    dto.value = res.data.value?.[0]
    id.value = supplierId
  }
}

initData()

const EnocbootconfigSupplierDetailHeader = () => (
  <PageHeader>
    {{
      operation: () => (
        <>
          {user.hasAccessRight('BAS^SUPPLIER_MODIFY') && (
            <XButtonAsync
              action={() =>
                save(() =>
                  useRequest(
                    '/enocbootconfig/supplier',
                    dto.value?.id ? 'put' : 'post',
                    { payload: dto.value! }
                  ).then((res) => {
                    id.value = res.data.value?.[0]?.id ?? id.value
                    form.value?.search()
                  })
                )
              }
            >
              保存
            </XButtonAsync>
          )}
          {user.hasAccessRight('BAS^SUPPLIER_MODIFY') && (
            <XButtonAsync
              action={() =>
                save(() =>
                  useRequest(
                    '/enocbootconfig/supplier',
                    dto.value?.id ? 'put' : 'post',
                    { payload: dto.value! }
                  ).then(() => router.back())
                )
              }
            >
              保存退出
            </XButtonAsync>
          )}
          {dto.value?.id && user.hasAccessRight('BAS^SUPPLIER_DELETE') && (
            <XButtonAsync
              action={() =>
                destroy(() =>
                  useRequest(`/enocbootconfig/supplier/${id.value}`, 'delete').then(() =>
                    router.back()
                  )
                )
              }
            >
              删除
            </XButtonAsync>
          )}
        </>
      )
    }}
  </PageHeader>
)

const EnocbootconfigSupplierDetailFormRequest = () => (
  <XFormRequest
    ref={form}
    :model-value="dto"
    :config="EnocbootconfigSupplierFormRequestConfig"
    @update:model-value="(v) => {
      dto.value = v
    }"
  />
)
</script>

<template>
  <div>
    <EnocbootconfigSupplierDetailHeader />
    <EnocbootconfigSupplierDetailFormRequest />
  </div>
</template>
