import type { TypeOf } from 'io-ts'
import { string, type } from 'io-ts'
import { UUID } from 'io-ts-types'

export const Regex = type({
  uuid: UUID,
  value: string,
})

export type Regex = TypeOf<typeof Regex>
