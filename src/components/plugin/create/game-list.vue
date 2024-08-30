<script setup lang="ts">
import { useField } from 'vee-validate'
import type { Schema } from './schema'
import { useGameList } from '@/modules/game-list'

const { gameList } = useGameList()
const { value: form } = useField<Schema['gameList']>('gameList')

const [state, toggle] = useToggle()

function onRemove({ index }: { index: number }) {
  form.value.splice(index, 1)
}

function onSelect({ uuid }: { uuid: string }) {
  form.value.push({
    uuid,
    regexList: [],
  })

  toggle()
}

const el = ref()
onClickOutside(el, () => toggle(false))
</script>

<template>
  <section class="space-y-4">
    <section ref="el" class="relative w-fit">
      <FormButton type="button" intent="secondary" :active="state" @click="() => toggle()">
        pick game
      </FormButton>

      <TransitionVertical>
        <section v-if="state" class="absolute left-0 top-full h-48 w-min overflow-hidden py-2">
          <section class="size-full overflow-hidden rounded-md border border-stone-900/10 bg-stone-600 shadow-md">
            <section class="flex size-full flex-col gap-4 overflow-auto p-2">
              <FormButton v-for="{ name, uuid } of gameList.filter(x => !form.some(y => x.uuid === y.uuid))" :key="uuid" type="button" class="!shadow-none" intent="secondary" @click="() => onSelect({ uuid })">
                {{ name }}
              </FormButton>
            </section>
          </section>
        </section>
      </TransitionVertical>
    </section>

    <section class="space-y-4">
      <FormGroup v-for="{ uuid, regexList }, index of form" :key="uuid" class="space-y-4">
        <header class="flex items-center gap-4">
          <h1 class="grow underline underline-offset-4">
            {{ uuid }}
          </h1>

          <FormButton type="button" intent="remove" size="small" @click="() => onRemove({ index })">
            remove
          </FormButton>
        </header>

        <section v-for="regex of regexList" :key="regex.uuid">
          <input v-model="regex.value" type="text" class="create-input">
        </section>
      </FormGroup>
    </section>
  </section>
</template>
