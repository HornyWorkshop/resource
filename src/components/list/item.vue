<script setup lang="ts">
import DoNotDisturbIcon from '~icons/ic/baseline-do-not-disturb'
import EditIcon from '~icons/ic/baseline-edit'
import type { Component } from 'vue'

interface Props {
  line?: boolean
}

interface Emits {
  (e: 'remove'): void
  (e: 'edit'): void
}

interface Slots {
  footer?: () => Component
  body?: () => Component
  header?: () => Component
}

defineProps<Props>()
defineEmits<Emits>()

const slots = defineSlots<Slots>()
</script>

<template>
  <UiGroup class="flex" :hover="true" size="none">
    <aside :class="{ 'flex-row': line, 'flex-col': !line }" class="flex gap-2 bg-neutral-900 p-2">
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

    <section :class="{ 'flex flex-row items-center justify-between gap-4': line, 'space-y-4': !line }" class="size-full overflow-hidden p-4">
      <header v-if="slots.header" class="lowercase underline underline-offset-4">
        <slot name="header" />
      </header>

      <section v-if="slots.body" class="space-y-4">
        <slot name="body" />
      </section>

      <footer v-if="slots.footer" class="text-xs font-bold uppercase text-neutral-700">
        <slot name="footer" />
      </footer>
    </section>
  </UiGroup>
</template>
