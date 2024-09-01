import type { TypeOf } from 'io-ts'
import { record } from 'io-ts'
import { UUID } from 'io-ts-types'
import { Game } from '.'

export const GameList = record(UUID, Game)
export type GameList = TypeOf<typeof GameList>
