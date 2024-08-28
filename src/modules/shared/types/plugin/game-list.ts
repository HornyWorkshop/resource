import { array } from 'io-ts'
import { Game } from './game'

export const GameList = array(Game)
