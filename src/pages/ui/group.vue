<script setup lang="ts">
import { styles } from '@/components/form/group/styles'
</script>

<template>
  <WrapperUi :variants="styles.variants">
    <template #name>
      UI/Group
    </template>

    <template #component="{ row }">
      <FormGroup v-bind="row">
        some text
      </FormGroup>
    </template>
  </WrapperUi>
</template>
