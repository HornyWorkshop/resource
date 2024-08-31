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
        Content -> Plugin List
      </PageName>

      <GameCreate v-slot="{ toggle }">
        <FormButton v-show="configured.state" type="button" @click="toggle()">
          add plugin
        </FormButton>
      </GameCreate>
    </template>

    <template #item="{ edit, remove, ...item }">
      <ListItem @edit="edit" @remove="remove">
        <PluginItem :item="item" />
      </ListItem>
    </template>
  </WrapperList>
</template>
