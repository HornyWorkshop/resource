<script setup lang="ts">
import { useField } from 'vee-validate'
import type { Schema } from './schema'
import { useGameList } from '@/modules/game-list'

import DoNotDisturbIcon from '~icons/ic/baseline-do-not-disturb'

const { list: gameList } = useGameList()
const { value: game } = useField<Schema['gameList']>('gameList')

function create() {
  return { uuid: createIdentity(), value: '' } as typeof game.value[number]['regexList'][number]
}

const available = computed(() => Object.values(gameList.value).filter(x => game.value.some(y => x.uuid === y.uuid) === false))
</script>

<template>
  <section class="space-y-4">
    <UiDrop v-if="available.length > 0" :values="available" print="name" @select="({ uuid }, toggle) => { game.push({ uuid, regexList: [] }), toggle() }">
      pick game
    </UiDrop>

    <section v-if="game.length > 0" class="space-y-4">
      <UiGroup v-for="{ uuid, regexList }, index of game" :key="uuid" class="space-y-4">
        <header class="flex items-center justify-between gap-2">
          <section class="flex items-center gap-2">
            <h1 class="underline underline-offset-4">
              {{ gameList[uuid]?.name }}
            </h1>

            <button type="button" class="text-red-300 transition-colors hover:text-neutral-300" @click="game.splice(index, 1)">
              <DoNotDisturbIcon />
            </button>
          </section>

          <span class="text-xs uppercase text-neutral-700">
            {{ uuid }}
          </span>
        </header>

        <section v-for="regex, index of regexList" :key="regex.uuid" class="flex items-center gap-4">
          <UiInput v-model="regex.value" type="text" placeholder="regex" size="small" class="size-full" />

          <button type="button" class="text-red-300 transition-colors hover:text-neutral-300" @click="regexList.splice(index, 1)">
            <DoNotDisturbIcon />
          </button>
        </section>

        <UiButton class="size-full" @click="regexList.push(create())">
          add regex
        </UiButton>
      </UiGroup>
    </section>
  </section>
</template>
