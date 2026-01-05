<script setup lang="tsx">
export interface ButtonProps extends UIProps<string> {
  disabled?: boolean
}

const { disabled } = defineProps<ButtonProps>()

const obj = {
  z: 2,
  a: 3,
}

const UI = () => <button disabled={disabled} />
</script>

<template>
  <UI />
</template>
