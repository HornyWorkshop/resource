<script setup lang="ts">
import { useField } from 'vee-validate'
import type { Schema } from './schema'
import { usePluginList } from '@/modules/plugin-list'

const { list: pluginList } = usePluginList()
const { value: plugin } = useField<Schema['pluginList']>('pluginList')

const available = computed(() => Object.values(pluginList.value).filter(x => plugin.value.some(y => x.uuid === y.uuid) === false))
</script>

<template>
  <section class="space-y-4">
    <section v-if="plugin.length > 0" class="space-y-4">
      <UiGroup v-for="{ uuid }, index of plugin" :key="uuid" class="space-y-4">
        <ContentSharedRemovable class="flex gap-2 underline underline-offset-4" @click="plugin.splice(index, 1)">
          <span>
            {{ pluginList[uuid]?.name ?? "Unknown plugin" }}
          </span>
        </ContentSharedRemovable>

        <article>
          <ContentEditorCrawlerGameList :row="index" />
        </article>
      </UiGroup>
    </section>

    <UiDrop v-if="available.length > 0" :values="available" print="name" @select="({ uuid }) => plugin.push({ uuid, gameList: [] })">
      pick plugin
    </UiDrop>
  </section>
</template>
