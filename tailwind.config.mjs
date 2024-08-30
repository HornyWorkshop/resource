/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.vue',
  ],
  safelist: [
    /**
     * button tailwind variants
     */

    'px-2',
    'px-4',
    'py-2',

    'transition-colors',
    'rounded-md',
    'shadow-md',

    'cursor-pointer',
    'cursor-default',

    'bg-slate-800',
    'bg-stone-800',
    'bg-rose-800',

    'bg-slate-600',
    'bg-stone-600',
    'bg-rose-600',

    'text-slate-600',
    'text-stone-600',
    'text-rose-600',

    'hover:text-slate-400',
    'hover:text-stone-400',
    'hover:text-rose-400',

    'hover:bg-slate-800',
    'hover:bg-stone-800',
    'hover:bg-rose-800',

    /**
     * group tailwind variants
     */

    'outline-neutral-300',
    'outline-neutral-700',
    'outline-neutral-900',

    'px-4',
    'py-2',
    'px-6',
    'py-4',

    // 'p-2',
    // 'p-4',

    'transition-[outline-color]',
    'rounded-md',
    'shadow-md',

    'outline',
    'outline-1',

    'hover:outline-neutral-300',

    /**
     * TODO: Debug
     */

    'text-red-500',
    'hover:text-red-500',
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
