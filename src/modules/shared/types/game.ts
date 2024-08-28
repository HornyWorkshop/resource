import type { TypeOf } from 'io-ts'

import { array, string, type } from 'io-ts'
import { UUID } from 'io-ts-types'
import { ExeList } from './exe'

export const Game = type({
  uuid: UUID,
  name: string,
  exeList: ExeList,
})

export const GameList = array(Game)

export type Game = TypeOf<typeof Game>
export type GameList = TypeOf<typeof GameList>

// https://youtu.be/WniQSF9lEYs?list=RDMMv6PPn8gmoa8
