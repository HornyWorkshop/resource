<script setup lang="ts">
import type { Game } from '@shared/types/game'

import EditIcon from '~icons/ic/baseline-edit'
import DoNotDisturbIcon from '~icons/ic/baseline-do-not-disturb'

interface Props { game: Game }
defineProps<Props>()

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
      <header class="grow truncate lowercase underline underline-offset-4">
        {{ game.name }}
      </header>

      <div class="grid grid-cols-[1fr_auto] gap-x-4">
        <template v-for="{ name, run } of game.exeList" :key="name">
          <span class="truncate">
            {{ name }}
          </span>

          <span :class="{ 'text-lime-300': run, 'text-rose-300': run === false }">
            {{ run }}
          </span>
        </template>
      </div>
    </section>
  </FormGroup>
</template>
