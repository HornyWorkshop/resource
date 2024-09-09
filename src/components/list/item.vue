<script setup lang="ts">
import DoNotDisturbIcon from '~icons/ic/baseline-do-not-disturb'
import EditIcon from '~icons/ic/baseline-edit'
import type { Component } from 'vue'

interface Emits {
  (e: 'remove'): void
  (e: 'edit'): void
}

interface Slots {
  footer: () => Component
  body: () => Component
  header?: () => Component
}

defineEmits<Emits>()

const slots = defineSlots<Slots>()
</script>

<template>
  <UiGroup class="flex" :hover="true" size="none">
    <aside class="flex flex-col gap-2 bg-neutral-900 px-2 py-4">
      <button type="button" @click="$emit('edit')">
        <ListSidebarItem>
          <EditIcon />
        </ListSidebarItem>
      </button>

      <button type="button" class="text-red-300" @click="$emit('remove')">
        <ListSidebarItem>
          <DoNotDisturbIcon />
        </ListSidebarItem>
      </button>
    </aside>

    <section class="size-full space-y-4 overflow-hidden p-4">
      <header v-if="slots.header" class="truncate lowercase underline underline-offset-4">
        <slot name="header" />
      </header>

      <section class="space-y-4">
        <slot name="body" />
      </section>

      <footer class="text-xs font-bold uppercase text-neutral-700">
        <slot name="footer" />
      </footer>
    </section>
  </UiGroup>
</template>
