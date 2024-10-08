import { array, string, type } from 'io-ts'
import { UUID } from 'io-ts-types'
import type { TypeOf } from 'io-ts'

export const Plugin = type({
  uuid: UUID,
  name: string,
  gameList: array(UUID),
})

export type Plugin = TypeOf<typeof Plugin>
