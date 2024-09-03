import { array } from 'io-ts'
import { Game } from './game/game'

export const GameList = array(Game)
