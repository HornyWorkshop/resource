<script setup lang="ts">
import type { Plugin } from '@shared/types/plugin'

interface Props { plugin: Plugin }
defineProps<Props>()
</script>

<template>
  <article class="cursor-move space-y-4 rounded-md p-4 shadow-md outline outline-1 outline-neutral-700 transition-[outline-color] hover:outline-neutral-300">
    <header class="px-2 lowercase underline underline-offset-4">
      [{{ plugin.github.owner }}]: {{ plugin.github.repo }}
    </header>

    <div class="grid grid-cols-[1fr_auto] gap-x-4">
      <template v-for="{ uuid, regex } of plugin.gameList" :key="uuid">
        <span>{{ uuid }}</span>
        <span class="text-fuchsia-300">{{ regex }}</span>
      </template>
    </div>
  </article>
</template>
