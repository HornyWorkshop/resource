import { readTextFile, writeTextFile } from '@tauri-apps/api/fs'
import { join } from '@tauri-apps/api/path'
import { match } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import type { Decoder, Errors } from 'io-ts'
import type { UnwrapRef } from 'vue'
import type { UUID } from 'io-ts-types'
import { failure } from 'io-ts/PathReporter'
import { useProvider } from '../provider'

function onLeft(e: Errors) {
  // TODO: send to task's in right bottom corner
  console.debug(failure(e).join('\n'))
}

export function createList<I, A extends Record<UUID, { uuid: UUID }>>({ name, codec }: { name: string, codec: Decoder<I, A> }) {
  const file = `${name}List.json`

  return createGlobalState(() => {
    const { content } = useProvider()
    const path = computedAsync(() => join(content.value, file), '')

    const list = ref({} as A)

    function onRight(value: A) {
      // TODO: wtf?
      list.value = value as UnwrapRef<A>
    }

    watchImmediate(path, async (path) => {
      const values = await readTextFile(path)
      const stored = codec.decode(JSON.parse(values))

      pipe(stored, match(onLeft, onRight))
    })

    watch(list, async () => {
      if (path.value === '') {
        console.debug(`skip save ${file}`)
        return
      }

      console.debug(`save ${file} with path: ${path.value}`)

      await writeTextFile(path.value, JSON.stringify(list.value, null, 2))
    }, { deep: true })

    return { list }
  })
}
