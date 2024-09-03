<script setup lang="ts">
import { useCrawlerList } from '@/modules/crawler-list'
import { useProvider } from '@/modules/provider'

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
