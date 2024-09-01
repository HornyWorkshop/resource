<script setup lang="ts">
import type { Plugin } from '@shared/types/plugin'
import { useGameList } from '@/modules/game-list'

interface Props { item: Plugin }
defineProps<Props>()

const { gameList } = useGameList()
</script>

<template>
  <section class="space-y-4">
    <template v-for="{ uuid, regexList } of item.gameList" :key="uuid">
      <h1 class="uppercase text-sky-300">
        {{ gameList.find(e => e.uuid === uuid)?.name ?? 'Unknown game' }}
      </h1>

      <ul class="text-fuchsia-300">
        <PluginRegex :list="regexList" />
      </ul>
    </template>
  </section>
</template>
