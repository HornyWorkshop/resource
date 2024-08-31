<script setup lang="ts">
import type { Game } from '@shared/types/game'

import EditIcon from '~icons/ic/baseline-edit'
import DoNotDisturbIcon from '~icons/ic/baseline-do-not-disturb'

defineEmits<Emits>()
interface Emits {
  (e: 'remove'): void
  (e: 'edit'): void
}
</script>

<template>
  <FormGroup class="flex" :hover="true" size="none">
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
      <slot />
    </section>
  </FormGroup>
</template>
