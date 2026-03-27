<script setup lang="tsx">
interface Dto {
  age?: number
  name?: string
}
const data = ref({ age: 18, name: 'xx' } as Dto)

const XFormJsx = () => (
  <XForm
    content={({ data }) => (
      <>
        <XFormItem content={() => <XInput v-model={data.name} />} label="姓名" />
        <XFormItem content={() => <XInputNumber v-model={data.age} />} label="年龄" />
      </>
    )}
    data={data.value}
  />
)

const formValidation = ref()
const XFormValidationJsx = () => (
  <XForm
    content={({ data }) => (
      <>
        <XFormItem content={() => <XInput v-model={data.name} />} label="姓名" required />
        <XFormItem
          content={() => <XInputNumber v-model={data.age} />}
          label="年龄"
          required
          validator={() => {
            if (data.age ?? 0 < 20) {
              return '年龄不能低于 20'
            }
          }}
        />
        <XFormItem content={() => (
          <>
            <XButton onClick={() => formValidation.value?.validate()}>validate</XButton>
            <XButton onClick={() => formValidation.value?.clearValidate()}>clearValidate</XButton>
          </>
        )}
        />
      </>
    )}
    data={data.value}
    ref={formValidation}
  />
)

const formValidationTabs = ref()
const formValidationTabsActive = ref('1')
const XFormValidationTabssx = () => (
  <XForm
    content={({ data }) => (
      <>
        <XTabs v-model={formValidationTabsActive.value}>
          <XTabPane label="tab-pane-1" name="1">
            <XFormItem content={() => <XInput v-model={data.name} />} label="姓名" required />
          </XTabPane>
          <XTabPane label="tab-pane-2" name="2">
            <XFormItem
              content={() => <XInputNumber v-model={data.age} />}
              label="年龄"
              required
              validator={() => {
                if (data.age ?? 0 < 20) {
                  return '年龄不能低于 20'
                }
              }}
            />
          </XTabPane>
        </XTabs>

        <XFormItem content={() => (
          <>
            <XButton onClick={() => formValidationTabs.value?.validate()}>validate</XButton>
            <XButton onClick={() => formValidationTabs.value?.clearValidate()}>clearValidate</XButton>
          </>
        )}
        />
      </>
    )}
    data={data.value}
    ref={formValidationTabs}
  />
)
</script>

<template>
  <ElText>表单</ElText>
  <XFormJsx />
  <ElDivider />
  <ElText>表单验证</ElText>
  <XFormValidationJsx />
  <ElText>Tabs表单验证</ElText>
  <XFormValidationTabssx />
</template>
