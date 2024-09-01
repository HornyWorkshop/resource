<script setup lang="ts">
import { useField } from 'vee-validate'
import type { Schema } from './schema'
import { useGameList } from '@/modules/game-list'

import DoNotDisturbIcon from '~icons/ic/baseline-do-not-disturb'

const { gameList } = useGameList()
const { value: game } = useField<Schema['gameList']>('gameList')

const [state, toggle] = useToggle()

function onRemove({ index }: { index: number }) {
  game.value.splice(index, 1)
}

function onSelect({ uuid }: { uuid: string }) {
  game.value.push({
    uuid,
    regexList: [],
  })

  toggle()
}

function onAdd({ list }: { list: typeof game.value[number]['regexList'] }) {
  list.push({ uuid: createIdentity(), value: '' })
}

const el = ref()
onClickOutside(el, () => toggle(false))
</script>

<template>
  <section class="space-y-4">
    <section ref="el" class="relative w-fit">
      <UiButton type="button" intent="secondary" :active="state" @click="toggle()">
        pick game
      </UiButton>

      <TransitionVertical>
        <section v-if="state" class="absolute left-0 top-full max-h-48 w-min max-w-64 overflow-hidden py-2">
          <section class="size-full overflow-hidden rounded-md border border-stone-900/10 bg-stone-600 shadow-md">
            <section class="flex size-full flex-col gap-4 overflow-auto p-2">
              <UiButton v-for="{ name, uuid } of gameList.filter(x => !game.some(y => x.uuid === y.uuid))" :key="uuid" type="button" :shadow="false" intent="secondary" class="truncate" @click="onSelect({ uuid })">
                {{ name }}
              </UiButton>
            </section>
          </section>
        </section>
      </TransitionVertical>
    </section>

    <section class="space-y-4">
      <UiGroup v-for="{ uuid, regexList }, index of game" :key="uuid" class="space-y-4">
        <header class="flex items-center gap-4">
          <h1 class="grow underline underline-offset-4">
            {{ uuid }}
          </h1>

          <button type="button" class="text-red-300 transition-colors hover:text-neutral-300" @click="onRemove({ index })">
            <DoNotDisturbIcon />
          </button>
        </header>

        <section v-for="regex of regexList" :key="regex.uuid" class="flex items-center gap-4">
          <UiInput v-model="regex.value" type="text" placeholder="regex" size="small" class="size-full" />
          <button type="button" class="text-red-300 transition-colors hover:text-neutral-300" @click="onRemove({ index })">
            <DoNotDisturbIcon />
          </button>
        </section>

        <UiButton class="size-full" @click="onAdd({ list: regexList }) ">
          add regex
        </UiButton>
      </UiGroup>
    </section>
  </section>
</template>
