<script setup lang="ts">
import { useField } from 'vee-validate'
import type { Schema } from './schema'
import { useGameList } from '@/modules/game-list'

const { value: game } = useField<Schema['gameList']>('gameList')

const { list: gameList } = useGameList()

const available = computed(() => Object.values(gameList.value).filter(x => game.value.includes(x.uuid) === false))
</script>

<template>
  <UiGroup class="space-y-4">
    <section v-if="game.length > 0" class="flex flex-col gap-2">
      <ContentSharedRemovable v-for="value, index of game" :key="value" @click="game.splice(index, 1)">
        <span>
          {{ gameList[value]?.name }}
        </span>
      </ContentSharedRemovable>
    </section>

    <UiDrop v-if="available.length > 0" :values="available" print="name" @select="({ uuid }, toggle) => { game.push(uuid), toggle() }">
      pick game
    </UiDrop>
  </UiGroup>
</template>
