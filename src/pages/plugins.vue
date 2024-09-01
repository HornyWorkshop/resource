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

      <PluginCreate v-slot="{ toggle }">
        <UiButton v-show="configured.state" type="button" @click="toggle()">
          add plugin
        </UiButton>
      </PluginCreate>
    </template>

    <template #item="{ edit, remove, ...item }">
      <ListItem @edit="edit" @remove="remove">
        <template #header>
          [{{ item.github.owner }}]: {{ item.github.repo }}
        </template>

        <template #body>
          <PluginItem :item="item" />
        </template>
        
        <template #footer>
          {{ item.uuid }}
        </template>
      </ListItem>
    </template>
  </WrapperList>
</template>
