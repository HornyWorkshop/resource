<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { schema } from './schema'
import { useGameList } from '@/modules/game-list'

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
      name: '',
      directory: '',
      exeList: [],
    },
  })

  nextTick(() => inputEl.value?.focus())
})

const { gameList } = useGameList()

const onSubmit = handleSubmit(({ uuid, name, exeList }) => {
  gameList.value.push({
    uuid,
    name,
    exeList: exeList.map(e => ({
      name: e.name,
      run: e.run,
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
          <GameCreateName />

          <GameCreateSelectDirectory />

          <GameCreateExe />

          <GameCreateErrors :errors="errors" />

          <section>
            <button type="submit" class="create-button size-full px-4 py-2">
              save
            </button>
          </section>
        </form>
      </div>
    </section>
  </WrapperModal>
</template>
