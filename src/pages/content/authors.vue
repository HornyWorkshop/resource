<script setup lang="ts">
import { useProvider } from '@/modules/provider'
import { useAuthorList } from '../../modules/author-list'

const { list: authorList } = useAuthorList()
const { configured } = useProvider()
</script>

<template>
  <WrapperList v-model="authorList" line>
    <template #header>
      <PageName>
        Content -> Authors List
      </PageName>

      <ContentEditorAuthor v-slot="{ toggle }">
        <UiButton v-show="configured.state" type="button" @click="toggle()">
          add author
        </UiButton>
      </ContentEditorAuthor>
    </template>

    <template #item="{ edit, remove, ...item }">
      <ListItem line @edit="edit" @remove="remove">
        <template #body>
          <p class="leading-none">
            {{ item.name }}
          </p>
        </template>

        <template #footer>
          {{ item.uuid }}
        </template>
      </ListItem>
    </template>
  </WrapperList>
</template>
