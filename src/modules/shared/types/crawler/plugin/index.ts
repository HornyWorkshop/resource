import { type } from 'io-ts'
import { UUID } from 'io-ts-types'
import { GameList } from '../game/list'

export const Plugin = type({
  uuid: UUID,
  gameList: GameList,
})
