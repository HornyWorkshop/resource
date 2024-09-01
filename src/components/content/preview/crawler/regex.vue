<script setup lang="ts">
import type { RegexList } from '@shared/types/crawler/regex-list'

interface Props { list: RegexList }
defineProps<Props>()
</script>

<template>
  <li v-for="{ uuid, value } of list" :key="uuid" class="truncate" :title="value">
    {{ value }}
  </li>
</template>
