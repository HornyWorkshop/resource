import { tv } from 'tailwind-variants'

export const styles = tv({
  base: 'rounded-md transition-colors',
  variants: {
    intent: {
      primary: 'bg-slate-600',
      secondary: 'bg-stone-600',
      remove: 'bg-rose-600',
    },
    size: {
      small: 'px-2',
      medium: 'px-4 py-2',
    },
    active: {
      true: '',
      false: '',
    },
    cursor: {
      true: 'cursor-pointer',
      false: 'cursor-default',
    },
    shadow: {
      true: 'shadow-md',
      false: '',
    },
  },
  compoundVariants: [
    /**
     * active: true
     */

    {
      intent: 'primary',
      active: true,
      class: 'bg-slate-800 text-slate-600',
    },
    {
      intent: 'secondary',
      active: true,
      class: 'bg-stone-800 text-stone-600',
    },
    {
      intent: 'remove',
      active: true,
      class: 'bg-rose-800 text-rose-600',
    },

    /**
     * active: false
     */

    {
      intent: 'primary',
      active: false,
      class: 'hover:bg-slate-800 hover:text-slate-400',
    },
    {
      intent: 'secondary',
      active: false,
      class: 'hover:bg-stone-800 hover:text-stone-400',
    },
    {
      intent: 'remove',
      active: false,
      class: 'hover:bg-rose-800 hover:text-rose-400',
    },
  ],
})
