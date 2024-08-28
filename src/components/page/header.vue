<script setup lang="ts">
import { useProvider } from '@/modules/provider'

const { configured } = useProvider()

const hint = computed(() => configured.state.value === false && configured.isLoading.value === false)
</script>

<template>
  <header class="space-y-4">
    <slot />

    <div v-show="hint" class="rounded-md bg-red-700 px-6 py-4 text-center uppercase">
      Specify the root directory to "provider" in the settings
    </div>
  </header>
</template>
