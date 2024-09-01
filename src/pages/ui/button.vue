<script setup lang="ts">
import { styles } from '@/components/ui/button/styles'
</script>

<template>
  <WrapperUi :variants="styles.variants">
    <template #name>
      UI/Button
    </template>

    <template #component="{ row }">
      <UiButton v-bind="row">
        some text
      </UiButton>
    </template>
  </WrapperUi>
</template>
