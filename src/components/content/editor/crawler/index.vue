<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import type { UUID } from 'io-ts-types'
import { schema } from './schema'
import { useCrawlerList } from '@/modules/crawler-list'

const { handleSubmit, resetForm, errors } = useForm({
  validationSchema: toTypedSchema(schema),
})

const [state, toggle] = useToggle()

const inputEl = ref<HTMLInputElement | null>(null)

watch(state, (state) => {
  if (state === false) {
    return
  }

  resetForm({
    values: {
      uuid: createIdentity() as UUID,
      plugin: '' as UUID,
      provider: {
        type: 'github',
        owner: '',
        repo: '',
      },
      gameList: [],
    },
  })

  nextTick(() => inputEl.value?.focus())
})

const { list: crawlerList } = useCrawlerList()

const onSubmit = handleSubmit((value) => {
  crawlerList.value[value.uuid] = {
    uuid: value.uuid,
    plugin: value.plugin,
    provider: value.provider,
    gameList: value.gameList,
  }

  toggle()
})
</script>

<template>
  <slot :toggle="toggle" />

  <WrapperModal :state="state" :toggle="toggle">
    <section class="flex size-full place-content-center place-items-center">
      <div class="flex h-3/4 w-full place-content-center place-items-center overflow-auto">
        <form class="size-full w-4/5 space-y-[6vh]" @submit="onSubmit">
          <ContentEditorCrawlerGithub />

          <ContentEditorCrawlerPlugin />

          <ContentEditorCrawlerGameList />

          <FormErrors :errors="errors" />

          <FormSave />
        </form>
      </div>
    </section>
  </WrapperModal>
</template>
