<script setup lang="ts">
import type { Crawler } from '@shared/types/crawler'
import { useGameList } from '@/modules/game-list'

interface Props { item: Crawler }
defineProps<Props>()

const { list: gameList } = useGameList()
</script>

<template>
  <section class="space-y-4">
    <section v-for="{ uuid, regexList } of item.gameList" :key="uuid">
      <h1 class="text-sky-300">
        {{ gameList[uuid]?.name ?? 'Unknown game' }}
      </h1>

      <ul class="space-y-2 px-4 text-fuchsia-300">
        <ContentPreviewCrawlerRegex :list="regexList" />
      </ul>
    </section>
  </section>
</template>
