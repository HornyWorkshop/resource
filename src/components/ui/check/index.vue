<script setup lang="ts">
// import type { VariantProps } from 'tailwind-variants'
// import { styles } from './styles'

// type ButtonProps = VariantProps<typeof styles>

// interface Props {
//   intent?: ButtonProps['intent']
//   size?: ButtonProps['size']
//   active?: ButtonProps['active']
//   hover?: ButtonProps['hover']
// }

// withDefaults(defineProps<Props>(), {
//   intent: 'primary',
//   size: 'medium',
//   active: false,
//   hover: false,
// })
</script>

<template>
  <article class="flex items-center">
    <input id="link-checkbox" type="checkbox" class="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600">
    <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      <slot />
    </label>
  </article>
</template>
