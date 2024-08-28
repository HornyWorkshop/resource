<script setup lang="ts">
import { useGameList } from '@/modules/game-list'

const { gameList } = useGameList()

const [state, toggle] = useToggle()

function onSelect() {
  toggle()
}
</script>

<template>
  <section class="relative">
    <button type="button" @click="() => toggle()">
      pick game
    </button>

    <TransitionVertical>
      <section v-if="state" class="absolute left-0 top-full flex h-48 w-min flex-col gap-4 overflow-hidden rounded-md bg-neutral-900/80 shadow-md backdrop-blur-md">
        <section class="flex flex-col overflow-auto">
          <button v-for="{ name, uuid } of gameList" :key="uuid" type="button" class="px-4 py-2 transition-colors hover:bg-neutral-300 hover:text-neutral-900" @click="() => onSelect()">
            {{ name }}
          </button>
        </section>
      </section>
    </TransitionVertical>
  </section>
</template>
