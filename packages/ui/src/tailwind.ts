import _plugin from 'tailwindcss/plugin'

import { tv as _tv, type TV } from 'tailwind-variants'

export const themeColorsLight = {
  primary: {
    50: 'oklch(98.0% 0.02 194.8)',
    100: 'oklch(95.0% 0.04 194.8)',
    200: 'oklch(90.0% 0.06 194.8)'
  }
}

export const themeColorsDark = {}

export const plugin = (config: { prefix?: string }) => {
  return _plugin(
    ({ addBase }) => {
      addBase({
        [':root, [data-theme]']: {}
      })
    },
    {
      theme: {
        extend: {
          colors: {
            ...themeColorsLight
          }
        }
      }
    }
  )
}

export const tv: TV = (options, config) => _tv(options, { ...config })

export { type VariantProps } from 'tailwind-variants'
