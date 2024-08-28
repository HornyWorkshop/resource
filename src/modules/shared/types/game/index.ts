import type { TypeOf } from 'io-ts'

import { string, type } from 'io-ts'
import { UUID } from 'io-ts-types'
import { ExeList } from './exe'

export const Game = type({
  uuid: UUID,
  name: string,
  exeList: ExeList,
})

export type Game = TypeOf<typeof Game>

// https://youtu.be/WniQSF9lEYs?list=RDMMv6PPn8gmoa8
