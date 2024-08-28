<script setup lang="ts">
import { useField } from 'vee-validate'
import type { Schema } from './schema'

const { value: name } = useField<Schema['name']>('name')
const { value: uuid } = useField<Schema['uuid']>('uuid')

watch(name, () => {
  uuid.value = createIdentity()
})
</script>

<template>
  <section class="space-y-2">
    <div v-if="name.length > 0" class="text-right">
      <FormSmall>
        {{ uuid }}
      </FormSmall>
    </div>

    <input v-model="name" type="text" class="create-input" placeholder="GAME NAME">
  </section>
</template>
