import { defineConfig } from 'vitest/config'

export default defineConfig(
  {
    test:
    {
      projects: [
        'packages/eslint-config',
        {
          test: { include: ['tests/**/*.test.ts'] }
        }
      ]
    }
  }
)
