import config from '@antfu/eslint-config'

export default config(
  {
    ignores: ['node_modules'],
    lessOpinionated: true,
    typescript: {
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json']
      }
    },
    stylistic: {
      overrides: {
        'style/comma-dangle': 'error'
      }
    }
  }
)
