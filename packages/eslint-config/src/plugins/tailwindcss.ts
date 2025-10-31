import type { ESLint, Linter } from 'eslint'

const tailwindcss: ESLint.Plugin = {
  meta: {
    name: 'eslint-plugin-tailwindcss',
    namespace: 'tailwindcss',
    version: '0.0.1'
  },
  processors: {},
  rules: {
    'sort-classes': {
      create: () => {
        return {}
      },
      meta: {
        docs: {},
        type: 'suggestion'
      }
    }
  }
}

export const recommended: Linter.Config[] = [
  {
    plugins: { tailwindcss },
    rules: {}
  }
]

export default {
  ...tailwindcss,
  configs: {
    recommended: [
      {
        plugins: { tailwindcss },
        rules: {}
      }
    ]
  }
}
