import { type } from 'io-ts'
import { UUID } from 'io-ts-types'
import { RegexList } from '../regex-list'

export const Game = type({
  uuid: UUID,
  regexList: RegexList,
})
