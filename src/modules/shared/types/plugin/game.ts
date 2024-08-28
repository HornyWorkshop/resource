import { array, string, type } from 'io-ts'
import { UUID } from 'io-ts-types'

export const Game = type({
  uuid: UUID,
  regex: array(string),
})
