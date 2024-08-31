<script setup lang="ts">
import { open } from '@tauri-apps/api/dialog'
import { useProvider } from '@/modules/provider'
import { useAsyncScope } from '@/composables/async-scope'

const { root } = useProvider()

const [state, toggle] = useToggle()

async function onRootChange() {
  const scope = useAsyncScope(() => Promise.resolve(toggle(false)))

  await scope(async () => {
    toggle(true)

    const result = await open({ directory: true })
    if (typeof result === 'string') {
      root.value = result
    }
  })
}
</script>

<template>
  <section class="space-y-4">
    <PageHeader>
      <PageName>
        Settings
      </PageName>
    </PageHeader>

    <section class="space-x-4">
      <FormButton type="button" :active="state" @click="onRootChange()">
        change provider root
      </FormButton>

      <span>
        {{ root }}
      </span>
    </section>
  </section>
</template>
