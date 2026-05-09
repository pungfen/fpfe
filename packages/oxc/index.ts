import { defineConfig as defineOxlintConfig } from 'oxlint'

export const defineConfig = (
  options: {
    vue?: boolean
  } = {}
) => {

  const { vue: enableVue } = options

  return defineOxlintConfig({})
}