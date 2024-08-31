<script setup lang="ts" generic="T extends { uuid: string }">
const model = defineModel<T[]>({ required: true })

function onRemove({ index }: { index: number }) {
  model.value.splice(Number(index), 1)
}

function onEdit({ index }: { index: number }) {
  console.log('call edit:', index)
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

    <section v-else class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));">
      <div v-for="item, index of model" :key="item.uuid">
        <slot name="item" v-bind="item" :remove="() => onRemove({ index })" :edit="() => onEdit({ index })" />
      </div>
    </section>
  </section>
</template>
