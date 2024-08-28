import { GameList } from '@shared/types/game'
import { readTextFile, writeTextFile } from '@tauri-apps/api/fs'
import { join } from '@tauri-apps/api/path'
import { match } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/function'
import type { Errors } from 'io-ts'
import { useProvider } from '../provider'

export const useGameList = createGlobalState(() => {
  const { content } = useProvider()
  const path = computedAsync(() => join(content.value, 'gameList.json'), '')

  const gameList = ref([] as GameList)

  watchImmediate(path, async (path) => {
    const values = await readTextFile(path)
    const stored = GameList.decode(JSON.parse(values))

    function onLeft(e: Errors) {
      // TODO: send to task's in right bottom corner
      console.debug(e)
    }

    function onRight(value: GameList) {
      gameList.value = value
    }

    pipe(stored, match(onLeft, onRight))
  })

  watch(gameList, async () => {
    if (path.value === '') {
      console.log('skip save gameList to file')
      return
    }

    console.log('save gameList to file: ', path.value)

    await writeTextFile(path.value, JSON.stringify(gameList.value))
  }, { deep: true })

  return { gameList }
})
