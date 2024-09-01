<script setup lang="ts">
import type { Game } from '@shared/types/game'

interface Props { item: Game }
defineProps<Props>()
</script>

<template>
  <article class="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2">
    <template v-for="{ name, exe, run } of item.exeList" :key="name">
      <div class="flex flex-col">
        <p class="truncate text-sky-300" :title="name">
          {{ name }}
        </p>

        <i class="truncate text-xs uppercase text-amber-300" :title="exe">
          {{ exe }}
        </i>
      </div>

      <span :class="{ 'text-lime-300': run, 'text-rose-300': run === false }">
        {{ run }}
      </span>
    </template>
  </article>
</template>
