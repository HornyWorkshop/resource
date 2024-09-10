<script setup lang="ts">
import { useAuthorList } from '@/modules/author-list'
import { useField } from 'vee-validate'
import type { Schema } from './schema'

const { value: authorList } = useField<Schema['authorList']>('authorList')

const { list } = useAuthorList()

const available = computed(() => Object.values(list.value).filter(x => authorList.value.includes(x.uuid) === false))
</script>

<template>
  <UiGroup class="space-y-4" name="Game developers/studios/etc.">
    <section v-if="authorList.length > 0" class="flex flex-wrap gap-2">
      <UiButton v-for="value, index of authorList" :key="value" type="button" @click.prevent="authorList.splice(index, 1)">
        {{ list[value]?.name }}
      </UiButton>
    </section>

    <UiDrop :values="available" print="name" @select="({ uuid }) => { authorList.push(uuid) }">
      pick author
    </UiDrop>
  </UiGroup>
</template>
