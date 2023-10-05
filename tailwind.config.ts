import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'base': '#EDEDED',
        'dark-base': '#16151b',
        'dark-bg': '#2e2d31',
        'primary': '#DA0037',
        'light-gray': '#F2F2F2',
        'font-light': '#595959'
      },
    },
  },
  plugins: [],
}
export default config
