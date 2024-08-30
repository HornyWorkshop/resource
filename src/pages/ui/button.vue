<script setup lang="ts">
import { styles } from '@/components/form/button/styles'
</script>

<template>
  <WrapperUi :variants="styles.variants">
    <template #name>
      UI/Button
    </template>

    <template #component="{ row }">
      <FormButton v-bind="row">
        some text
      </FormButton>
    </template>
  </WrapperUi>
</template>
