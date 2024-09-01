<script setup lang="ts">
import type { VariantProps } from 'tailwind-variants'
import { styles } from './styles'

type ButtonProps = VariantProps<typeof styles>

interface Props {
  intent?: ButtonProps['intent']
  size?: ButtonProps['size']
  active?: ButtonProps['active']
  cursor?: ButtonProps['cursor']
  shadow?: ButtonProps['shadow']
}

withDefaults(defineProps<Props>(), {
  intent: 'primary',
  size: 'medium',
  active: false,
  cursor: true,
  shadow: true,
})
</script>

<template>
  <button :class="styles({ intent, size, active, cursor, shadow })">
    <slot />
  </button>
</template>
