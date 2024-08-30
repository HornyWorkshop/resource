<script setup lang="ts">
import { onKeyDown } from '@vueuse/core'
import CloseIcon from '~icons/ic/outline-close'

interface Props { state: boolean, toggle: (state?: boolean) => boolean }
const props = defineProps<Props>()

onKeyDown('Escape', () => props.toggle(false))
</script>

<template>
  <Teleport to="body">
    <TransitionVertical>
      <section v-if="state" class="fixed inset-0 flex flex-col bg-neutral-900/80 backdrop-blur">
        <div class="relative">
          <button type="button" class="absolute right-4 top-4 opacity-10 transition-opacity hover:opacity-100" @click="() => toggle()">
            <CloseIcon class="text-right text-6xl text-white" />
          </button>
        </div>

        <section class="grow overflow-y-auto">
          <slot />
        </section>
      </section>
    </TransitionVertical>
  </Teleport>
</template>
