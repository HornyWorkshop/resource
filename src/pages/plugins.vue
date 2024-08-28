<script setup lang="ts">
import { usePluginList } from '../modules/plugin-list'
import { useProvider } from '@/modules/provider'
import RecyclingIcon from '~icons/ic/baseline-recycling'

const { pluginList } = usePluginList()
const { configured } = useProvider()
</script>

<template>
  <section class="space-y-4">
    <PageHeader>
      <div class="flex justify-between gap-4">
        <PageName>
          Plugin List
        </PageName>

        <PluginCreate v-slot="{ toggle }">
          <button v-show="configured.state" type="button" class="create-button px-4 py-2" @click="() => toggle()">
            add plugin
          </button>
        </PluginCreate>
      </div>
    </PageHeader>

    <section class="flex flex-wrap gap-4">
      <p v-show="pluginList.length <= 0">
        nothing...
      </p>

      <PluginItem v-for="item of pluginList" :key="item.uuid" :plugin="item" />
    </section>

    <section
      class="flex place-content-center rounded-md bg-neutral-700 p-10 text-neutral-900 shadow-md outline outline-1 outline-neutral-900 transition-all hover:bg-transparent hover:text-neutral-300 hover:outline-neutral-300"
    >
      <RecyclingIcon class="text-9xl" />
    </section>
  </section>
</template>
