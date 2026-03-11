import jsPlugin from '@eslint/js'
import { stylistic } from '@fpfe/eslint-config'
import stylePlugin from '@stylistic/eslint-plugin'
import { type Linter } from 'eslint'
import { mergeProcessors } from 'eslint-merge-processors'
import jsoncPlugin from 'eslint-plugin-jsonc'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import vuePlugin from 'eslint-plugin-vue'
import vueProcessor from 'eslint-processor-vue-blocks'
import { defineConfig, globalIgnores } from 'eslint/config'
import { configs as tsConfigs, parser as tsParser, plugin as tsPlugin } from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default defineConfig([
  globalIgnores(['.agents', '.claude', '.vscode'], 'fpfe/eslint/global-ignores'),
  stylistic(),
  {
    name: 'fpfe/eslint/register-all-plugins',
    plugins: {
      ['@stylistic']: stylePlugin,
      ['@typescript-eslint']: tsPlugin,
      ['js']: jsPlugin,
      ['jsonc']: jsoncPlugin,
      ['perfectionist']: perfectionistPlugin,
      ['vue']: vuePlugin
    }
  },
  {
    name: 'fpfe/eslint/style',
    rules: {
      ...stylePlugin.configs.customize({ commaDangle: 'never' }).rules,
      ...perfectionistPlugin.configs['recommended-natural'].rules
    }
  },
  {
    files: ['**/*.json'],
    language: 'jsonc/x',
    name: 'fpfe/eslint/jsonc'
  },
  {
    files: ['**/package.json'],
    name: 'fpfe/eslint/sort-package-json',
    rules: {
      'jsonc/sort-array-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^files$'
        }
      ],
      'jsonc/sort-keys': ['error', {
        order: ['publisher',
          'name',
          'displayName',
          'type',
          'version',
          'private',
          'packageManager',
          'description',
          'author',
          'contributors',
          'license',
          'funding',
          'homepage',
          'repository',
          'bugs',
          'keywords',
          'categories',
          'sideEffects',
          'imports',
          'exports',
          'main',
          'module',
          'unpkg',
          'jsdelivr',
          'types',
          'typesVersions',
          'bin',
          'icon',
          'files',
          'engines',
          'activationEvents',
          'contributes',
          'scripts',
          'peerDependencies',
          'peerDependenciesMeta',
          'dependencies',
          'optionalDependencies',
          'devDependencies',
          'pnpm',
          'overrides',
          'resolutions',
          'husky',
          'simple-git-hooks',
          'lint-staged',
          'eslintConfig'
        ],
        pathPattern: '^$'
      }, {
        order: { type: 'asc' },
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$'
      },
      {
        order: { type: 'asc' },
        pathPattern: '^(?:resolutions|overrides|pnpm.overrides)$'
      },
      {
        order: { type: 'asc' },
        pathPattern: '^workspaces\\.catalog$'
      },
      {
        order: { type: 'asc' },
        pathPattern: '^workspaces\\.catalogs\\.[^.]+$'
      },
      {
        order: [
          'types',
          'import',
          'require',
          'default'
        ],
        pathPattern: '^exports.*$'
      },
      {
        order: [
          // client hooks only
          'pre-commit',
          'prepare-commit-msg',
          'commit-msg',
          'post-commit',
          'pre-rebase',
          'post-rewrite',
          'post-checkout',
          'post-merge',
          'pre-push',
          'pre-auto-gc'
        ],
        pathPattern: '^(?:gitHooks|husky|simple-git-hooks)$'
      }]
    }
  },
  {
    extends: [
      jsPlugin.configs.recommended,
      ...tsConfigs.recommendedTypeChecked, ...tsConfigs.recommendedTypeChecked, ...tsConfigs.stylisticTypeChecked],
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { sourceType: 'module' }
    },
    name: 'fpfe/eslint/typescript/parser'
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.node.json', './packages/*/tsconfig.json']
      }
    },
    name: 'fpfe/eslint/typescript/type-aware-parser'
  },
  {
    extends: [
      jsPlugin.configs.recommended, ...tsConfigs.recommendedTypeChecked, ...tsConfigs.recommendedTypeChecked, ...tsConfigs.stylisticTypeChecked, ...vuePlugin.configs['flat/recommended']],
    files: ['packages/element/**/*.{ts,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        extraFileExtensions: ['.vue'],
        parser: tsParser,
        project: ['./packages/element/tsconfig.json'],
        sourceType: 'module'
      }
    },
    name: 'fpfe/eslint/element',
    processor: mergeProcessors([vuePlugin.processors['.vue'] as Linter.Processor, vueProcessor({
      blocks: {
        customBlocks: true,
        script: false,
        styles: true,
        template: false
      }
    })]),
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/valid-v-for': 'off'
    }
  },
  { name: 'fpfe/eslint/packer' }
])
