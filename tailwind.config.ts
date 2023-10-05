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
        'purple-base': '#3F4472',
        'dark-purple-base': '#1c1e36',
        'dark-bg': '#16151b',
        'dark-font': '#dbddee',
        'blue-primary': '#1572B6',
        'light-gray': '#F2F2F2',
        'light-green': '#5CC4C4'
      },
    },
  },
  plugins: [],
}
export default config
