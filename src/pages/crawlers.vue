<script setup lang="ts">
import { useCrawlerList } from '@/modules/crawler-list'
import { usePluginList } from '@/modules/plugin-list'
import { useProvider } from '@/modules/provider'

const { list: pluginList } = usePluginList()
const { list: crawlerList } = useCrawlerList()
const { configured } = useProvider()
</script>

<template>
  <WrapperList v-model="crawlerList">
    <template #header>
      <PageName>
        Content -> Update Crawler
      </PageName>

      <ContentEditorCrawler v-slot="{ toggle }">
        <UiButton v-show="configured.state" type="button" @click="toggle()">
          add crawler
        </UiButton>
      </ContentEditorCrawler>
    </template>

    <template #item="{ edit, remove, ...item }">
      <ListItem @edit="edit" @remove="remove">
        <template #header>
          {{ pluginList[item.plugin]?.name }}
        </template>

        <template #body>
          <ContentPreviewCrawlerProvider v-bind="item.provider" />
          <ContentPreviewCrawlerItem :item="item" />
        </template>

        <template #footer>
          {{ item.uuid }}
        </template>
      </ListItem>
    </template>
  </WrapperList>
</template>
