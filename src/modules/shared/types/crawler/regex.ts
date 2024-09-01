import { string, type } from 'io-ts'
import { UUID } from 'io-ts-types'

export const Regex = type({
  uuid: UUID,
  value: string,
})
