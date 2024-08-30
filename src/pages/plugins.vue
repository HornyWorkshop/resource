<script setup lang="ts">
import { usePluginList } from '../modules/plugin-list'
import { useProvider } from '@/modules/provider'

const { pluginList } = usePluginList()
const { configured } = useProvider()
</script>

<template>
  <WrapperList v-model="pluginList">
    <template #header>
      <PageName>
        Plugin List
      </PageName>

      <PluginCreate v-slot="{ toggle }">
        <FormButton v-show="configured.state" type="button" @click="toggle()">
          add plugin
        </FormButton>
      </PluginCreate>
    </template>

    <template #item="item">
      <PluginItem :plugin="item" />
    </template>
  </WrapperList>
</template>
