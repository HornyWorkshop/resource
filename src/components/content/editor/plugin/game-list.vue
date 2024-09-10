<script setup lang="ts">
import { useGameList } from '@/modules/game-list'
import { useField } from 'vee-validate'
import type { Schema } from './schema'

const { value: game } = useField<Schema['gameList']>('gameList')

const { list: gameList } = useGameList()

const available = computed(() => Object.values(gameList.value).filter(x => game.value.includes(x.uuid) === false))
</script>

<template>
  <UiGroup class="space-y-4" name="Games that the plugin supports.">
    <section v-if="game.length > 0" class="flex flex-wrap gap-2">
      <UiButton v-for="value, index of game" :key="value" type="button" @click.prevent="game.splice(index, 1)">
        {{ gameList[value]?.name }}
      </UiButton>
    </section>

    <UiDrop :values="available" print="name" @select="({ uuid }, toggle) => { game.push(uuid), toggle() }">
      pick game
    </UiDrop>
  </UiGroup>
</template>
