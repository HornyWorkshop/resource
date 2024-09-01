<script setup lang="ts">
import { useGameList } from '../modules/game-list'
import { useProvider } from '@/modules/provider'

const { gameList } = useGameList()
const { configured } = useProvider()
</script>

<template>
  <WrapperList v-model="gameList">
    <template #header>
      <PageName>
        Content -> Game List
      </PageName>

      <GameCreate v-slot="{ toggle }">
        <UiButton v-show="configured.state" type="button" @click="toggle()">
          add game
        </UiButton>
      </GameCreate>
    </template>

    <template #item="{ edit, remove, ...item }">
      <ListItem @edit="edit" @remove="remove">
        <template #header>
          {{ item.name }}
        </template>

        <template #body>
          <GameItem :item="item" />
        </template>

        <template #footer>
          {{ item.uuid }}
        </template>
      </ListItem>
    </template>
  </WrapperList>
</template>
