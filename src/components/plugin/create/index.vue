<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { UUID } from 'io-ts-types'
import { schema } from './schema'
import { usePluginList } from '@/modules/plugin-list'
import { cast } from '@/modules/validator/cast'

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
      uuid: createIdentity(),
      github: {
        owner: '',
        repo: '',
      },
      gameList: [],
    },
  })

  nextTick(() => inputEl.value?.focus())
})

const { pluginList } = usePluginList()

const onSubmit = handleSubmit(({ uuid, github, gameList }) => {
  pluginList.value.push({
    uuid: cast(UUID)(uuid),
    github,
    gameList: gameList.map(({ uuid, regex }) => ({
      uuid: cast(UUID)(uuid),
      regex,
    })),
  })

  toggle()
})
</script>

<template>
  <slot :toggle="toggle" />

  <WrapperModal :state="state" :toggle="toggle">
    <section class="flex size-full place-content-center place-items-center">
      <div class="flex h-3/4 w-full place-content-center place-items-center overflow-auto">
        <form class="size-full w-4/5 space-y-[6vh]" @submit="onSubmit">
          <PluginCreateGithub />

          <PluginCreateGameList />

          <FormErrors :errors="errors" />

          <FormSave />
        </form>
      </div>
    </section>
  </WrapperModal>
</template>
