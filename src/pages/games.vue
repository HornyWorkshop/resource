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
        <FormButton v-show="configured.state" type="button" @click="toggle()">
          add game
        </FormButton>
      </GameCreate>
    </template>

    <template #item="{ edit, remove, ...item }">
      <GameItem :game="item" @edit="edit" @remove="remove" />
    </template>
  </WrapperList>
</template>
