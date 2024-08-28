import type { TypeOf } from 'io-ts'
import { type } from 'io-ts'
import { UUID } from 'io-ts-types'
import { GitHub } from './github'
import { GameList } from './game-list'

export const Plugin = type({
  uuid: UUID,
  github: GitHub,
  gameList: GameList,
})

export type Plugin = TypeOf<typeof Plugin>
