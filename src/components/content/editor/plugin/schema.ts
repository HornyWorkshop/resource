import type { UUID } from 'io-ts-types'
import type { InferType } from 'yup'
import { array, object, string } from 'yup'

export const schema = object({
  uuid: string<UUID>().required().uuid(),
  name: string().required(),
  gameList: array(string<UUID>().required().uuid()).required().min(1),
})

export type Schema = InferType<typeof schema>
