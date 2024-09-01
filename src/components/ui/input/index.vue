<script setup lang="ts">
import type { VariantProps } from 'tailwind-variants'
import { styles } from './styles'

type ButtonProps = VariantProps<typeof styles>

interface Props {
  intent?: ButtonProps['intent']
  size?: ButtonProps['size']
}

withDefaults(defineProps<Props>(), {
  intent: 'primary',
  size: 'medium',
  active: false,
  hover: false,
})

const model = defineModel({ required: true })
</script>

<template>
  <input v-model="model" :class="styles({ intent, size })">
</template>
