<script setup lang="ts" generic="T extends { uuid: string }">
const model = defineModel<T[]>({ required: true })

function onDragStart(event: DragEvent, index: number) {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('index', String(index))
  }
}

function onDrop(event: DragEvent) {
  if (event.dataTransfer) {
    const index = event.dataTransfer.getData('index')
    model.value.splice(Number(index), 1)
  }
}
</script>

<template>
  <section class="space-y-4">
    <PageHeader>
      <div class="flex justify-between gap-4">
        <slot name="header" />
      </div>
    </PageHeader>

    <section v-if="model.length <= 0">
      <p>
        nothing...
      </p>
    </section>

    <section v-else class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));">
      <div v-for="item, index of model" :key="item.uuid" draggable="true" @dragstart="onDragStart($event, index)">
        <slot name="item" v-bind="item" />
      </div>
    </section>

    <MiscRecycling @drop="onDrop($event)" @dragover.prevent @dragenter.prevent />
  </section>
</template>
