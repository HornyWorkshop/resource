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
    <div :class="{ 'opacity-100': directory.length > 0 }" class="text-right opacity-0 transition-opacity">
      <FormSmall>
        {{ directory }}
      </FormSmall>
    </div>

    <FormButton type="button" class="size-full" @click="onClick()">
      select folder
    </FormButton>
  </section>
</template>
