<script setup lang="ts">
import DoNotDisturbIcon from '~icons/ic/baseline-do-not-disturb'

interface Emits {
  (e: 'remove'): void
}

defineEmits<Emits>()
</script>

<template>
  <section class="flex gap-2 underline underline-offset-4">
    <slot />

    <button type="button" class="text-red-300 transition-colors hover:text-neutral-300" @click="$emit('remove')">
      <DoNotDisturbIcon />
    </button>
  </section>
</template>
