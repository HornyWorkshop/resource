<script setup lang="ts">
import { open } from '@tauri-apps/api/dialog'
import { useField } from 'vee-validate'
import type { Schema } from './schema'

const { value: directory } = useField<Schema['directory']>('directory')

async function onClick() {
  const result = await open({ directory: true })
  if (typeof result === 'string') {
    directory.value = result
  }
}
</script>

<template>
  <section class="space-y-2">
    <div v-if="directory.length > 0" class="text-right">
      <FormSmall>
        {{ directory }}
      </FormSmall>
    </div>

    <button type="button" class="create-button size-full py-4" @click="() => onClick()">
      select folder
    </button>
  </section>
</template>
