import { string, type } from 'io-ts'

import { UUID } from 'io-ts-types'
import type { TypeOf } from 'io-ts'

export const Author = type({
  uuid: UUID,
  name: string,
})

export type Author = TypeOf<typeof Author>

// https://youtu.be/OUD62LIbg20?list=RDOUD62LIbg20
