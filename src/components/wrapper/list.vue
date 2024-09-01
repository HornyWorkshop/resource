<script setup lang="ts" generic="T extends { uuid: string }">
const model = defineModel<Record<string, T>>({ required: true })

function onRemove({ uuid }: { uuid: string }) {
  delete model.value[uuid]
}

function onEdit({ uuid }: { uuid: string }) {
  console.log('call edit:', uuid)
}
</script>

<template>
  <section class="space-y-4">
    <PageHeader>
      <div class="flex justify-between gap-4">
        <slot name="header" />
      </div>
    </PageHeader>

    <section v-if="Object.keys(model).length <= 0">
      <p>
        nothing...
      </p>
    </section>

    <section v-else class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));">
      <div v-for="item, uuid of model" :key="uuid">
        <slot name="item" v-bind="item" :remove="() => onRemove({ uuid })" :edit="() => onEdit({ uuid })" />
      </div>
    </section>
  </section>
</template>
