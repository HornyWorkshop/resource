<script setup lang="ts">
import { cast } from '@/modules/validator/cast'
import { UUID } from 'io-ts-types'
import { useField } from 'vee-validate'
import type { Schema } from './schema'

const { value: owner } = useField<Schema['provider']['owner']>('provider.owner')
const { value: repo } = useField<Schema['provider']['repo']>('provider.repo')

const { value: uuid } = useField<Schema['uuid']>('uuid')

watchArray([owner, repo], () => {
  uuid.value = cast(UUID)(createIdentity())
})
</script>

<template>
  <section class="space-y-2">
    <div :class="{ 'opacity-100': owner.length > 0 || repo.length > 0 }" class="text-right opacity-0 transition-opacity">
      <FormSmall>
        {{ uuid }}
      </FormSmall>
    </div>

    <section class="grid grid-cols-2 gap-2">
      <UiInput v-model="owner" type="text" placeholder="GITHUB OWNER" spellcheck="false" />
      <UiInput v-model="repo" type="text" placeholder="GITHUB REPO" spellcheck="false" />
    </section>
  </section>
</template>
