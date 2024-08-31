<script setup lang="ts">
import type { Game } from '@shared/types/game'

interface Props { item: Game }
defineProps<Props>()
</script>

<template>
  <header class="grow truncate lowercase underline underline-offset-4">
    {{ item.name }}
  </header>

  <div class="grid grid-cols-[1fr_auto] gap-x-4">
    <template v-for="{ name, run } of item.exeList" :key="name">
      <span class="truncate">
        {{ name }}
      </span>

      <span :class="{ 'text-lime-300': run, 'text-rose-300': run === false }">
        {{ run }}
      </span>
    </template>
  </div>
</template>
