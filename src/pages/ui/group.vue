<script setup lang="ts">
import { styles } from '@/components/ui/group/styles'
</script>

<template>
  <WrapperUi :variants="styles.variants">
    <template #name>
      UI/Group
    </template>

    <template #component="{ row }">
      <UiGroup v-bind="row">
        some text
      </UiGroup>
    </template>
  </WrapperUi>
</template>
