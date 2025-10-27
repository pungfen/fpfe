import json from '@eslint/json'

export const jsonc = async () => {
  return [
    {
      extends: ['json/recommended'],
      files: ['**/*.json'],
      language: 'json/json',
      plugins: { json }
    },
    {
      extends: ['json/recommended'],
      files: ['**/*.jsonc'],
      language: 'json/jsonc',
      plugins: { json }
    },
    {
      extends: ['json/recommended'],
      files: ['**/*.json5'],
      language: 'json/json5',
      plugins: { json }
    }
  ]
}
