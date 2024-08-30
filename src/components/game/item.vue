<script setup lang="ts">
import type { Game } from '@shared/types/game'

interface Props { game: Game }
defineProps<Props>()
</script>

<template>
  <FormGroup class="cursor-move space-y-4" :hover="true">
    <header class="truncate lowercase underline underline-offset-4">
      {{ game.name }}
    </header>

    <div class="grid grid-cols-[1fr_auto] gap-x-4">
      <template v-for="{ name, run } of game.exeList" :key="name">
        <span class="truncate">{{ name }}</span>
        <span :class="{ 'text-lime-300': run, 'text-rose-300': run === false }">{{ run }}</span>
      </template>
    </div>
  </FormGroup>
</template>
