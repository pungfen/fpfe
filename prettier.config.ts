import { type Config } from 'prettier'

export default {
  trailingComma: 'none',
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tv']
} as Config
