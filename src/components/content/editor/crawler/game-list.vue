<script setup lang="ts">
import { useField } from 'vee-validate'
import type { UnwrapRef } from 'vue'
import type { Schema } from './schema'
import { useGameList } from '@/modules/game-list'

const props = defineProps<Props>()

const { list: gameList } = useGameList()
const { value: field } = useField<Schema['pluginList'][number]['gameList']>(`pluginList.${props.row}.gameList`)

interface Props {
  row: number
}

function create() {
  return { uuid: createIdentity(), value: '' } as UnwrapRef<typeof field>[number]['regexList'][number]
}

const available = computed(() => Object.values(gameList.value).filter(x => field.value.some(y => x.uuid === y.uuid) === false))
</script>

<template>
  <section class="space-y-4">
    <section v-if="field.length > 0" class="space-y-4">
      <UiGroup v-for="{ uuid, regexList }, index of field" :key="uuid" class="space-y-4">
        <header class="flex items-center justify-between gap-2">
          <ContentSharedRemovable class="flex items-center gap-2" @remove="field.splice(index, 1)">
            <h1 class="underline underline-offset-4">
              {{ gameList[uuid]?.name }}
            </h1>
          </ContentSharedRemovable>

          <span class="text-xs uppercase text-neutral-700">
            {{ uuid }}
          </span>
        </header>

        <ContentSharedRemovable v-for="regex, index of regexList" :key="regex.uuid" class="flex items-center gap-4" @remove="regexList.splice(index, 1)">
          <UiInput v-model="regex.value" type="text" placeholder="regex" size="small" class="size-full" />
        </ContentSharedRemovable>

        <UiButton class="size-full" @click="regexList.push(create())">
          add regex
        </UiButton>
      </UiGroup>
    </section>

    <UiDrop v-if="available.length > 0" :values="available" print="name" @select="({ uuid }, toggle) => { field.push({ uuid, regexList: [] }), toggle() }">
      pick game
    </UiDrop>
  </section>
</template>
