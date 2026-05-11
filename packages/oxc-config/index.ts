import { defineConfig as defineOxlintConfig } from 'oxlint';

export const defineConfig = (options: {} = {}) => {
  return defineOxlintConfig({
    plugins: ['import'],
    rules: {
      'import/no-cycle': ['error', { maxDepth: 3 }],
    },
  });
};
