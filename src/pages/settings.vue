<script setup lang="ts">
import { useAsyncScope } from '@/composables/async-scope'
// import { useClient } from '@/modules/client'
import { useProvider } from '@/modules/provider'
import { open } from '@tauri-apps/api/dialog'

// const { path: clientPath } = useClient()
const { path: rootPath } = useProvider()

function getDir<T>(onPick: (value: string) => Promise<T>) {
  const [state, toggle] = useToggle()

  async function event() {
    const scope = useAsyncScope(() => Promise.resolve(toggle(false)))

    await scope(async () => {
      toggle(true)

      const result = await open({ directory: true })
      if (typeof result === 'string') {
        await onPick(result)
      }
    })
  }

  return { state, event }
}

const { state: rootState, event: onRootChange } = getDir(async value => rootPath.value = value)
// const { state: clientState, event: onClientChange } = getDir(async value => clientPath.value = value)
</script>

<template>
  <section class="space-y-4">
    <PageHeader>
      <PageName>
        Settings
      </PageName>
    </PageHeader>

    <section class="grid grid-cols-[auto_1fr] items-center gap-4">
      <UiButton type="button" :active="rootState" @click="onRootChange">
        change provider root
      </UiButton>

      <span>
        {{ rootPath }}
      </span>
      <!--
      <UiButton type="button" :active="clientState" @click="onClientChange">
        change client root
      </UiButton>

      <span>
        {{ clientPath }}
      </span> -->
    </section>
  </section>
</template>
