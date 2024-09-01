<script setup lang="ts">
import { useField } from 'vee-validate'
import type { UUID } from 'io-ts-types'
import type { Schema } from './schema'
import { usePluginList } from '@/modules/plugin-list'

import DoNotDisturbIcon from '~icons/ic/baseline-do-not-disturb'

const { list: pluginList } = usePluginList()
const { value: plugin } = useField<Schema['plugin']>('plugin')

const available = computed(() => Object.values(pluginList.value).filter(x => x.uuid !== plugin.value))
</script>

<template>
  <section class="space-y-4">
    <UiDrop v-if="plugin.length <= 0" :values="available" print="name" @select="({ uuid }) => plugin = uuid">
      pick plugin
    </UiDrop>

    <section v-if="plugin.length > 0" class="space-y-4">
      <p v-if="plugin in pluginList" class="flex place-content-center gap-4 text-4xl uppercase">
        {{ pluginList[plugin]?.name }}

        <button type="button" class="text-red-300 transition-colors hover:text-neutral-300" @click="(plugin = '' as UUID)">
          <DoNotDisturbIcon />
        </button>
      </p>
    </section>
  </section>
</template>
