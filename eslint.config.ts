import config from '@antfu/eslint-config'

export default config({
  type: 'lib',
  stylistic: {
    overrides: {
      'style/comma-dangle': 'error'
    }
  }
})
