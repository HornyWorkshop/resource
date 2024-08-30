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
          <FormButton v-show="configured.state" type="button" @click="() => toggle()">
            add plugin
          </FormButton>
        </PluginCreate>
      </div>
    </PageHeader>

    <section class="flex flex-wrap gap-4">
      <p v-show="pluginList.length <= 0">
        nothing...
      </p>

      <PluginItem v-for="item of pluginList" :key="item.uuid" :plugin="item" />
    </section>

    <MiscRecycling />
  </section>
</template>
