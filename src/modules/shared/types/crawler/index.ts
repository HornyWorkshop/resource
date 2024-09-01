import type { TypeOf } from 'io-ts'
import { type } from 'io-ts'
import { UUID } from 'io-ts-types'
import { GameList } from './game-list'
import { Provider } from './provider'

export const Crawler = type({
  uuid: UUID,
  plugin: UUID,
  provider: Provider,
  gameList: GameList,
})

export type Crawler = TypeOf<typeof Crawler>
