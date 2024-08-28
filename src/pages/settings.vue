<script setup lang="ts">
import { open } from '@tauri-apps/api/dialog'
import { useProvider } from '@/modules/provider'

const { root } = useProvider()

async function onRootChange() {
  const result = await open({ directory: true })
  if (typeof result !== 'string') {
    return
  }

  root.value = result
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
      <button type="button" class="create-button px-4 py-2" @click="() => onRootChange()">
        change provider root
      </button>

      <span>
        {{ root }}
      </span>
    </section>
  </section>
</template>
