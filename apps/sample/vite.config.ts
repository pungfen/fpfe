import { defineConfig} from 'vite'

import { BasePlugin} from '@fpfe/vite/local-plugins'

export default defineConfig({
  plugins: [
    BasePlugin()
  ]
})