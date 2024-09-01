<script setup lang="ts">
import { useField } from 'vee-validate'
import type { Schema } from './schema'

const { value: owner } = useField<Schema['github']['owner']>('github.owner')
const { value: repo } = useField<Schema['github']['repo']>('github.repo')

const { value: uuid } = useField<Schema['uuid']>('uuid')

watchArray([owner, repo], () => {
  uuid.value = createIdentity()
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
