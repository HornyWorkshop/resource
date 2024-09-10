<script setup lang="ts">
import type { VariantProps } from 'tailwind-variants'
import { styles } from './styles'

type ButtonProps = VariantProps<typeof styles>

interface Props {
  intent?: ButtonProps['intent']
  size?: ButtonProps['size']
  active?: ButtonProps['active']
  hover?: ButtonProps['hover']
  name?: string
}

withDefaults(defineProps<Props>(), {
  intent: 'primary',
  size: 'medium',
  active: false,
  hover: false,
})
</script>

<template>
  <article :class="styles({ intent, size, active, hover })">
    <FormSmall v-if="name" class="w-fit leading-none">
      {{ name }}
    </FormSmall>

    <slot />
  </article>
</template>
