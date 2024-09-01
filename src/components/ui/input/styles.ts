import { tv } from 'tailwind-variants'

export const styles = tv({
  base: 'rounded-md bg-neutral-700 leading-none text-neutral-900 shadow-md outline-none transition-all placeholder:text-neutral-900 hover:bg-neutral-300 hover:text-neutral-700 placeholder:hover:text-neutral-700 focus:bg-neutral-300 focus:text-neutral-700 focus:placeholder:text-neutral-700',
  variants: {
    intent: {
      primary: '',
      secondary: '',
    },
    size: {
      small: 'px-4 py-2',
      medium: 'p-4',
    },
  },
})
