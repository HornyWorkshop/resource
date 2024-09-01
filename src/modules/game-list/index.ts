import { GameList } from '@shared/types/game/list'
import { createList } from '../utils/list'

export const useGameList = createList({ name: 'game', codec: GameList })
