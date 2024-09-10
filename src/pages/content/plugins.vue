<script setup lang="ts">
import { useProvider } from '@/modules/provider'
import { usePluginList } from '../../modules/plugin-list'

const { list: pluginList } = usePluginList()
const { configured } = useProvider()
</script>

<template>
  <WrapperList v-model="pluginList">
    <template #header>
      <PageName>
        Content -> Plugin List
      </PageName>

      <ContentEditorPlugin v-slot="{ toggle }">
        <UiButton v-show="configured.state" type="button" @click="toggle()">
          add plugin
        </UiButton>
      </ContentEditorPlugin>
    </template>

    <template #item="{ edit, remove, ...item }">
      <ListItem @edit="edit" @remove="remove">
        <template #header>
          {{ item.name }}
        </template>

        <template #body>
          <ContentPreviewPluginItem :item="item" />
        </template>

        <template #footer>
          {{ item.uuid }}
        </template>
      </ListItem>
    </template>
  </WrapperList>
</template>
