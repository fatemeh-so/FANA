/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react'
import plugin from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue1: '#3c3abe',
        gray300: '#c4c4c4',
        gray900: '#2d2e37',
        white1: '#fcfcff',
        gray500:'#1f2937'
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          "colors": {
            // bg of 
            "background": {
              "DEFAULT": "#2d2e37",
              "foreground": "#fafafa"
            },
            "content1": "#141414",
            "content2": "#212121",
            "content3": "#2e2e2e",
            "content4": "#404040",
            "danger": {
              "50": "#262626",
              "100": "#525252",
              "200": "#787878",
              "300": "#a3a3a3",
              "400": "#c7c7c7",
              "500": "#d1d1d1",
              "600": "#dbdbdb",
              "700": "#e8e8e8",
              "800": "#f5f5f5",
              "900": "#fafafa",
              "DEFAULT": "#2d2e37"
            },
            "default": {
              "50": "#374151",
              // bg of tab
              "100": "#1f2937",
              "200": "#030712",
              "300": "#a3a3a3",
              "400": "#c7c7c7",
              "500": "#d1d1d1",
              "600": "#dbdbdb",
              "700": "#e8e8e8",
              "800": "#f5f5f5",
              "900": "#fafafa",
              "DEFAULT": "#2d2e37",
              "foreground": "#94a3b8"
            },
            "divider": "#a3a3a3",
            "focus": "#FCFCFF",
            "foreground": {
              "50": "#262626",
              "100": "#525252",
              "200": "#030712",
              "300": "#a3a3a3",
              "400": "#c7c7c7",
              "500": "#d1d1d1",
              "600": "#dbdbdb",
              "700": "#e8e8e8",
              "800": "#f5f5f5",
              "900": "#fafafa",
              "DEFAULT": "#121212",
              "foreground": "#262626"
            },
            "overlay": "#808080",
            "primary": {
              "50": "#262627",
              "100": "#515152",
              "200": "#777779",
              "300": "#a2a2a4",
              "400": "#c6c6c7",
              "500": "#d1d1d2",
              "600": "#dbdbdc",
              "700": "#e8e8e8",
              "800": "#f5f5f5",
              "900": "#fafafa",
              "DEFAULT": "#FCFCFF"
            },
            "secondary": {
              "50": "#1f212d",
              "100": "#434660",
              "200": "#62678d",
              "300": "#9396b4",
              "400": "#bdbfd1",
              "500": "#c9cad9",
              "600": "#d5d6e2",
              "700": "#e4e5ec",
              "800": "#f3f3f7",
              "900": "#f9f9fb",
              "DEFAULT": "#2E2F38"
            },
            "success": {
              "50": "#262626",
              "100": "#525252",
              "200": "#787878",
              "300": "#a3a3a3",
              "400": "#c7c7c7",
              "500": "#d1d1d1",
              "600": "#dbdbdb",
              "700": "#e8e8e8",
              "800": "#f5f5f5",
              "900": "#fafafa",
              "DEFAULT": "#C4C4C4"
            },
            "warning": {
              "50": "#0d0c41",
              "100": "#1b198a",
              "200": "#2825cb",
              "300": "#6664e3",
              "400": "#a1a0ee",
              "500": "#b2b1f1",
              "600": "#c3c3f4",
              "700": "#d9d8f8",
              "800": "#eeeefc",
              "900": "#f6f6fd",
              "DEFAULT": "#3c3abe"
            }
          },
          "extend": "dark"
        }
      },
    }), plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      )
    })
  ],
}
