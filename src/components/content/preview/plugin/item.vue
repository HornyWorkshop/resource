<script setup lang="ts">
import { useGameList } from '@/modules/game-list'
import type { Plugin } from '@shared/types/plugin'

interface Props { item: Plugin }
defineProps<Props>()

const { list: gameList } = useGameList()
</script>

<template>
  <h1 class="font-bold uppercase">
    supports
  </h1>

  <ul class="px-4">
    <li v-for="uuid of item.gameList" :key="uuid" class="text-sky-300">
      {{ gameList[uuid]?.name ?? 'Unknown game' }}
    </li>
  </ul>
</template>
