<script setup lang="ts" generic="T extends { uuid: string }">
import type { VariantProps } from 'tailwind-variants'
import type { UnwrapRef } from 'vue'
import type { styles } from './styles'

type StyleProps = VariantProps<typeof styles>

const props = withDefaults(defineProps<Props>(), {
  intent: 'primary',
  size: 'medium',
  active: false,
  hover: false,
})

defineEmits<Emits>()

const data = ref('')

interface Props {
  intent?: StyleProps['intent']
  size?: StyleProps['size']
  values: ReadonlyArray<T>
  print: keyof T
  filter?: (input: UnwrapRef<typeof data>, value: T) => boolean
}

const [toggled, toggle] = useToggle()

interface Emits {
  (e: 'select', value: T, t: typeof toggle): void
}

const drop = ref()
onClickOutside(drop, () => toggle(false))

const items = computed(() => props.filter ? props.values.filter(props.filter.bind(null, data.value)) : props.values)
</script>

<template>
  <section ref="drop" class="relative">
    <UiButton type="button" :active="toggled || items.length <= 0" intent="secondary" class="size-full" :disabled="items.length <= 0" @click="toggle()">
      <slot />
    </UiButton>

    <TransitionVertical>
      <section v-if="toggled && items.length > 0" class="absolute inset-x-0 top-full z-10 py-2">
        <section class="max-h-64 overflow-y-auto rounded-md border border-stone-900/10 bg-stone-600 shadow-md">
          <section class="space-y-4 p-2">
            <UiInput v-if="filter" v-model="data" intent="secondary" class="w-full text-center" />

            <section class="flex flex-col gap-2">
              <UiButton v-for="item of items" :key="item.uuid" type="button" :shadow="false" intent="secondary" class="truncate" @click="$emit('select', item, toggle)">
                {{ item[print as keyof typeof item] }}
              </UiButton>
            </section>
          </section>
        </section>
      </section>
    </TransitionVertical>
  </section>
</template>
