import config from '@antfu/eslint-config'

export default config(
  {
    ignores: ['node_modules'],
    type: 'lib',
    lessOpinionated: true,
    stylistic: {
      overrides: {
        'style/comma-dangle': 'error'
      }
    }
  }
)
