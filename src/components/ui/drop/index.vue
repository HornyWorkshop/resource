<script setup lang="ts" generic="T extends { uuid: string }">
import type { VariantProps } from 'tailwind-variants'
import type { styles } from './styles'

type StyleProps = VariantProps<typeof styles>

interface Props {
  intent?: StyleProps['intent']
  size?: StyleProps['size']
  values: ReadonlyArray<T>
  print: keyof T
}

withDefaults(defineProps<Props>(), {
  intent: 'primary',
  size: 'medium',
  active: false,
  hover: false,
})

defineEmits<Emits>()

const [state, toggle] = useToggle()

interface Emits {
  (e: 'select', value: T, t: typeof toggle): void
}

const drop = ref()
onClickOutside(drop, () => toggle(false))
</script>

<template>
  <section ref="drop" class="relative">
    <UiButton type="button" intent="secondary" :active="state" class="size-full" @click="toggle()">
      <slot />
    </UiButton>

    <TransitionVertical>
      <section v-if="state" class="absolute inset-x-0 top-full z-10 max-h-48 overflow-hidden py-2">
        <section class="size-full overflow-hidden rounded-md border border-stone-900/10 bg-stone-600 shadow-md">
          <section class="flex size-full flex-col gap-4 overflow-auto p-2">
            <UiButton v-for="value of values" :key="value.uuid" type="button" :shadow="false" intent="secondary" class="truncate" @click="$emit('select', value, toggle)">
              {{ value[print as keyof typeof value] }}
            </UiButton>
          </section>
        </section>
      </section>
    </TransitionVertical>
  </section>
</template>
