import { tv } from 'tailwind-variants'

export const styles = tv({
  base: 'rounded-md leading-none shadow-md outline-none transition-all',
  variants: {
    intent: {
      primary: 'bg-neutral-700 text-neutral-900 placeholder:text-neutral-900 hover:bg-neutral-300 hover:text-neutral-700 placeholder:hover:text-neutral-700 focus:bg-neutral-300 focus:text-neutral-700 focus:placeholder:text-neutral-700',
      secondary: '',
    },
    size: {
      small: 'px-4 py-2',
      medium: 'p-4',
    },
  },
})
