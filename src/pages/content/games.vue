<script setup lang="ts">
import { useProvider } from '@/modules/provider'
import { useGameList } from '../../modules/game-list'

const { list: gameList } = useGameList()
const { configured } = useProvider()
</script>

<template>
  <WrapperList v-model="gameList">
    <template #header>
      <PageName>
        Content -> Game List
      </PageName>

      <ContentEditorGame v-slot="{ toggle }">
        <UiButton v-show="configured.state" type="button" @click="toggle()">
          add game
        </UiButton>
      </ContentEditorGame>
    </template>

    <template #item="{ edit, remove, ...item }">
      <ListItem @edit="edit" @remove="remove">
        <template #header>
          {{ item.name }}
        </template>

        <template #body>
          <ContentPreviewGameItem :item="item" />
        </template>

        <template #footer>
          {{ item.uuid }}
        </template>
      </ListItem>
    </template>
  </WrapperList>
</template>
