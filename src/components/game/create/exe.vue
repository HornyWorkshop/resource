<script setup lang="ts">
import { useField } from 'vee-validate'

import { type FileEntry, readDir } from '@tauri-apps/api/fs'
import type { Schema } from './schema'

const { value: form, resetField: formReset } = useField<Schema['exeList']>('exeList')
const { value: directory } = useField<Schema['directory']>('directory')

watch(directory, () => {
  formReset()
})

function onAdd({ name }: FileEntry) {
  if (name) {
    form.value.push({
      run: false,
      name,
    })
  }
}

const exeList = computedAsync(async () => {
  const values = await readDir(directory.value)
  return values.filter(e => e.name?.endsWith('.exe'))
}, [])

const availableExeList = computed(() => exeList.value.filter(x => !form.value.some(y => y.name === x.name)))
</script>

<template>
  <section v-if="exeList.length > 0" class="flex items-start gap-4">
    <div v-show="availableExeList.length > 0" class="flex flex-col gap-2 rounded-md p-4 outline outline-1 outline-neutral-800">
      <template v-for="entry of availableExeList" :key="entry.name">
        <button v-if="entry.name" type="button" class="create-button px-2 py-1" @click="() => onAdd(entry)">
          {{ entry.name }}
        </button>
      </template>
    </div>

    <div v-show="form.length > 0" class="flex grow flex-wrap gap-2 rounded-md bg-neutral-800 p-4">
      <span v-for="value of form" :key="value.name" class="flex flex-col gap-2 rounded-md bg-neutral-900 p-4">
        <span class="text-center font-bold uppercase">
          {{ value.name }}
        </span>

        <button type="button" class="create-button px-2 py-1" :class="{ 'bg-green-800': value.run }" @click="() => value.run = !value.run">
          <template v-if="value.run">
            is default
          </template>

          <template v-else>
            is not default
          </template>
        </button>
      </span>
    </div>
  </section>
</template>
