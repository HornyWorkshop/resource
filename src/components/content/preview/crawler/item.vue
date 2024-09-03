<script setup lang="ts">
import type { Crawler } from '@shared/types/crawler'
import { useGameList } from '@/modules/game-list'
import { usePluginList } from '@/modules/plugin-list'

interface Props { item: Crawler }
defineProps<Props>()

const { list: gameList } = useGameList()
const { list: pluginList } = usePluginList()
</script>

<template>
  <section v-for="plugin of item.pluginList" :key="plugin.uuid" class="space-y-4">
    <h1 class="truncate lowercase underline underline-offset-4">
      {{ pluginList[plugin.uuid]?.name ?? 'Unknown game' }}
    </h1>

    <ul class="space-y-2 text-fuchsia-300">
      <section v-for="game of plugin.gameList" :key="game.uuid">
        <h1 class="text-sky-300">
          {{ gameList[game.uuid]?.name ?? 'Unknown game' }}
        </h1>

        <ul class="px-4 text-fuchsia-300">
          <ContentPreviewCrawlerRegex :list="game.regexList" />
        </ul>
      </section>
    </ul>
  </section>
</template>
