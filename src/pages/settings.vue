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
      <FormButton type="button" @click="onRootChange()">
        change provider root
      </FormButton>

      <span>
        {{ root }}
      </span>
    </section>
  </section>
</template>
