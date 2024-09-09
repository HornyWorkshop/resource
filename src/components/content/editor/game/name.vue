<script setup lang="ts">
import { cast } from '@/modules/validator/cast'
import { UUID } from 'io-ts-types'
import { useField } from 'vee-validate'
import type { Schema } from './schema'

const { value: name } = useField<Schema['name']>('name')
const { value: uuid } = useField<Schema['uuid']>('uuid')

watch(name, () => {
  uuid.value = cast(UUID)(createIdentity())
})
</script>

<template>
  <section class="space-y-2">
    <div :class="{ 'opacity-100': name.length > 0 }" class="text-right opacity-0 transition-opacity">
      <FormSmall>
        {{ uuid }}
      </FormSmall>
    </div>

    <input v-model="name" type="text" class="create-input-large" placeholder="GAME NAME">
  </section>
</template>
