<script setup lang="ts">
import RecyclingIcon from '~icons/ic/baseline-recycling'
</script>

<template>
  <FormGroup
    :hover="true"
    class="flex place-content-center rounded-md bg-neutral-700 text-neutral-600 shadow-md transition-all hover:text-neutral-300"
  >
    <section class="p-6">
      <RecyclingIcon class="text-9xl" />
    </section>
  </FormGroup>
</template>
