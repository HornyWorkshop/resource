/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
      gridTemplateColumns: {
        'wrapper-list': 'repeat(auto-fill, minmax(22rem, 1fr))',
      },
    },
  },
  plugins: [],
}
