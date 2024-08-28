<script setup lang="ts">
import type { Game } from '@shared/types/game'

interface Props { game: Game }
defineProps<Props>()
</script>

<template>
  <article class="cursor-move space-y-4 rounded-md p-4 shadow-md outline outline-1 outline-neutral-700">
    <header class="px-2 lowercase underline">
      {{ game.name }}
    </header>

    <div class="grid grid-cols-[1fr_auto] gap-x-4">
      <template v-for="{ name, run } of game.exeList" :key="name">
        <span>{{ name }}</span>
        <span :class="{ 'text-green-300': run, 'text-red-300': run === false }">{{ run }}</span>
      </template>
    </div>
  </article>
</template>
