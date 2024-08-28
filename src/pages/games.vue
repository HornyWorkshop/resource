<script setup lang="ts">
import { useGameList } from '../modules/game-list'
import { useProvider } from '@/modules/provider'
import RecyclingIcon from '~icons/ic/baseline-recycling'

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

function onDrop(event: DragEvent) {
  console.log('drop')

  if (event.dataTransfer) {
    const index = event.dataTransfer?.getData('index')
    console.log(`to remove index: ${index}`)
  }
}
</script>

<template>
  <section class="space-y-4">
    <PageHeader>
      <div class="flex justify-between gap-4">
        <PageName>
          Game List
        </PageName>

        <GameCreate v-slot="{ toggle }">
          <button v-show="configured.state" type="button" class="create-button px-4 py-2" @click="() => toggle()">
            add game
          </button>
        </GameCreate>
      </div>
    </PageHeader>

    <section class="flex flex-wrap gap-4">
      <p v-show="gameList.length <= 0">
        nothing...
      </p>

      <GameItem v-for="item, index of gameList" :key="item.uuid" :game="item" draggable="true" @dragstart="onDragStart($event, index)" />
    </section>

    <section
      class="flex place-content-center rounded-md bg-neutral-700 p-10 text-neutral-900" @drop="onDrop" @dragover.prevent @dragenter.prevent
    >
      <RecyclingIcon class="text-9xl" />
    </section>
  </section>
</template>
