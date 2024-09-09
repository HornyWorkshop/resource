<script setup lang="ts">
import { usePluginList } from '@/modules/plugin-list'
import { cast } from '@/modules/validator/cast'
import { toTypedSchema } from '@vee-validate/yup'
import { UUID } from 'io-ts-types'
import { useForm } from 'vee-validate'
import { schema } from './schema'

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
      uuid: cast(UUID)(createIdentity()),
      name: '',
      gameList: [],
    },
  })

  nextTick(() => inputEl.value?.focus())
})

const { list: pluginList } = usePluginList()

const onSubmit = handleSubmit((value) => {
  pluginList.value[value.uuid] = value

  toggle()
})
</script>

<template>
  <slot :toggle="toggle" />

  <WrapperModal :state="state" :toggle="toggle">
    <section class="flex size-full place-content-center place-items-center">
      <div class="flex h-3/4 w-full place-content-center place-items-center overflow-auto">
        <form class="size-full w-4/5 space-y-[6vh]" @submit="onSubmit">
          <ContentEditorPluginName />

          <ContentEditorPluginGameList />

          <FormErrors :errors="errors" />

          <FormSave />
        </form>
      </div>
    </section>
  </WrapperModal>
</template>
