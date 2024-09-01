import { readTextFile, writeTextFile } from '@tauri-apps/api/fs'
import { join } from '@tauri-apps/api/path'
import { match } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import type { Errors } from 'io-ts'
import { PluginList } from '@shared/types/plugin/list'
import { useProvider } from '../provider'

function onLeft(e: Errors) {
  // TODO: send to task's in right bottom corner
  console.debug(e)
}

export const usePluginList = createGlobalState(() => {
  const { content } = useProvider()
  const path = computedAsync(() => join(content.value, 'pluginList.json'), '')

  const pluginList = ref([] as PluginList)

  watchImmediate(path, async (path) => {
    const values = await readTextFile(path)
    const stored = PluginList.decode(JSON.parse(values))

    function onRight(value: PluginList) {
      pluginList.value = value
    }

    pipe(stored, match(onLeft, onRight))
  })

  watch(pluginList, async () => {
    if (path.value === '') {
      console.debug('skip save pluginList to file')
      return
    }

    console.debug('save pluginList to file: ', path.value)

    await writeTextFile(path.value, JSON.stringify(pluginList.value, null, 2))
  }, { deep: true })

  return { pluginList }
})
