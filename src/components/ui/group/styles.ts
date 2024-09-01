import { tv } from 'tailwind-variants'

export const styles = tv({
  base: 'rounded-md shadow-md outline outline-1 transition-[outline-color]',
  variants: {
    intent: {
      primary: 'outline-neutral-700',
      secondary: 'outline-neutral-900',
    },
    size: {
      none: '',
      small: 'px-4 py-2',
      medium: 'px-6 py-4',
    },
    active: {
      true: 'outline-neutral-300',
      false: '',
    },
    hover: {
      true: 'hover:outline-neutral-300 hover:shadow-lg',
      false: '',
    },
  },
})
