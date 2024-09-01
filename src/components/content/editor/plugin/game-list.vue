<script setup lang="ts">
import { useField } from 'vee-validate'
import type { Game } from '@shared/types/game'
import type { UUID } from 'io-ts-types'
import type { Schema } from './schema'
import { useGameList } from '@/modules/game-list'

import DoNotDisturbIcon from '~icons/ic/baseline-do-not-disturb'

const { value: game } = useField<Schema['gameList']>('gameList')

const { list: gameList } = useGameList()

const available = computed(() => Object.values(gameList.value).filter(x => game.value.includes(x.uuid) === false))
</script>

<template>
  <UiGroup class="space-y-4">
    <section v-if="game.length > 0" class="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2">
      <template v-for="value, index of game" :key="value">
        <span>
          {{ gameList[value]?.name }}
        </span>

        <button type="button" class="text-red-300 transition-colors hover:text-neutral-300" @click="game.splice(index, 1)">
          <DoNotDisturbIcon />
        </button>
      </template>
    </section>

    <UiDrop v-if="available.length > 0" :values="available" print="name" @select="({ uuid }, toggle) => { game.push(uuid), toggle() }">
      pick game
    </UiDrop>
  </UiGroup>
</template>
