<script setup lang="ts">
import type { Plugin } from '@shared/types/plugin'

interface Props { item: Plugin }
defineProps<Props>()
</script>

<template>
  <FormGroup class="cursor-move space-y-4">
    <header class="px-2 lowercase underline underline-offset-4">
      [{{ item.github.owner }}]: {{ item.github.repo }}
    </header>

    <div class="grid grid-cols-[1fr_auto] gap-x-4">
      <template v-for="{ uuid, regex } of item.gameList" :key="uuid">
        <span>{{ uuid }}</span>
        <span class="text-fuchsia-300">{{ regex }}</span>
      </template>
    </div>
  </FormGroup>
</template>
