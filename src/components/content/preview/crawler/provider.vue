<script setup lang="ts">
interface Props {
  type: string
  owner: string
  repo: string
}

defineProps<Props>()
</script>

<template>
  <UiGroup size="small">
    <div class="grid grid-cols-[auto_1fr] gap-x-4">
      <span class="truncate">
        owner
      </span>

      <span class="truncate text-amber-300">
        {{ owner }}
      </span>

      <span class="truncate">
        repo
      </span>

      <span class="text-amber-300">
        {{ repo }}
      </span>
    </div>

    <small class="truncate text-indigo-300">
      {{ type }}
    </small>
  </UiGroup>
</template>
