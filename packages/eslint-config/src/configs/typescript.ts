import { ConfigWithExtendsArray } from '@eslint/config-helpers'
import { interopDefault } from '@fp/shared'
import perfectionist from 'eslint-plugin-perfectionist'

export const typescript = async (options: {
  files?: (string | string[])[]
  tsconfigRootDir?: string
} = {}): Promise<ConfigWithExtendsArray> => {
  const { files = ['**/*.ts'], tsconfigRootDir } = options

  const [js, ts, stylistic] = await Promise.all(
    [
      interopDefault(import('@eslint/js')),
      interopDefault(import('typescript-eslint')),
      interopDefault(import('@stylistic/eslint-plugin'))
    ]
  )

  return [
    {
      extends: [
        js.configs.recommended,
        ts.configs.strictTypeChecked,
        ts.configs.stylisticTypeChecked,
        perfectionist.configs['recommended-natural'],
        stylistic.configs.customize({ commaDangle: 'never', quotes: 'single', semi: false })
      ],
      files,
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir
        }
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',

        'no-undef': 'off'
      }
    }
  ]
}
