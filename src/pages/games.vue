<script setup lang="ts">
import { useGameList } from '../modules/game-list'
import { useProvider } from '@/modules/provider'

const { gameList } = useGameList()
const { configured } = useProvider()

function onDragStart(event: DragEvent, index: number) {
  console.log('drag start')

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('index', String(index))
  }
}

// function onDrop(event: DragEvent) {
//   console.log('drop')

//   if (event.dataTransfer) {
//     const index = event.dataTransfer?.getData('index')
//     console.log(`to remove index: ${index}`)
//   }
// }
</script>

<template>
  <section class="space-y-4">
    <PageHeader>
      <div class="flex justify-between gap-4">
        <PageName>
          Game List
        </PageName>

        <GameCreate v-slot="{ toggle }">
          <FormButton v-show="configured.state" type="button" @click="() => toggle()">
            add game
          </FormButton>
        </GameCreate>
      </div>
    </PageHeader>

    <section v-if="gameList.length <= 0">
      <p>
        nothing...
      </p>
    </section>

    <section v-else class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));">
      <GameItem v-for="item, index of gameList" :key="item.uuid" :game="item" draggable="true" @dragstart="onDragStart($event, index)" />
    </section>

    <MiscRecycling />
  </section>
</template>
