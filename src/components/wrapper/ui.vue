<script setup lang="ts">
type Literal = string | number | boolean

interface Props {
  variants: Record<string, Record<string, Literal>>
}

const props = defineProps<Props>()

function _getVariants(values: [string, Literal[]][], rows: Record<string, Literal>[]) {
  const value = values.pop()

  if (value !== undefined) {
    const [name, props] = value

    const origin = JSON.parse(JSON.stringify(rows)) as Record<string, Literal>[]
    rows = props.flatMap(prop => origin.map(props => ({ ...props, [name]: prop === 'false' || prop === 'true' ? prop === 'true' : prop })))

    return _getVariants(values, rows)
  }

  return rows
}

function getVariants(values: [string, Literal[]][]) {
  const value = values.pop()

  if (value !== undefined) {
    const [name, props] = value

    const rows = props.map(prop => ({ [name]: prop })) as Record<string, Literal>[]

    return _getVariants(values, rows)
  }

  return []
}

function variantsOf(variants: Record<string, Record<string, Literal>>) {
  const values = Object.entries(variants).map(([name, values]) => [name, Object.keys(values)]) as [string, Literal[]][]

  return getVariants(values)
}

const rows = computed(() => variantsOf(props.variants))

function keyOf(x: Record<string, Literal>) {
  return Object.entries(x).map(([x, y]) => `${x}-${y}`).join('-')
}
</script>

<template>
  <section class="space-y-4">
    <PageHeader>
      <PageName>
        <slot name="name" />
      </PageName>
    </PageHeader>

    <section class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
      <UiGroup v-for="row of rows" :key="keyOf(row)" class="space-y-4">
        <h1>
          <ul class="grid grid-cols-[1fr_auto_auto] gap-x-2">
            <li v-for="value, key in row" :key="String(key)" class="contents">
              <b>{{ key }}</b> <span>=</span> <i class="text-lime-300">{{ value }}</i>
            </li>
          </ul>
        </h1>

        <slot name="component" :row="row" />        
      </UiGroup>
    </section>
  </section>
</template>
