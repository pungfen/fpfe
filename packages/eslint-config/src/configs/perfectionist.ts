import plugin, { configs } from 'eslint-plugin-perfectionist'
import type { EslintConfig } from '../types'

export const perfectionist =  (): EslintConfig[] => {
  return [
    {
      plugins: {
        ['perfectionist']: plugin
      },
      settings: {
        'perfectionist': {
        order: 'asc',
        partitionByComment: true,
        type: 'natural'
      }
      }
    },
    {
      rules: {
        ...configs['recommended-natural'].rules
      }
    }
  ]
}
