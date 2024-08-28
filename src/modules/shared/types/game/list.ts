import type { TypeOf } from 'io-ts'
import { array } from 'io-ts'
import { Game } from '.'

export const GameList = array(Game)
export type GameList = TypeOf<typeof GameList>
