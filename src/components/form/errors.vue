<script setup lang="ts">
interface Props { errors: Record<never, string> }
defineProps<Props>()
</script>

<template>
  <section v-show="Object.keys(errors).length > 0" class="grid grid-cols-[auto_1fr] items-start gap-4">
    <template v-for="value, key in errors" :key="key">
      <span class="rounded-md bg-red-900 px-4 py-1">
        {{ key }}
      </span>

      <span class="py-1">
        {{ value }}
      </span>
    </template>
  </section>
</template>
