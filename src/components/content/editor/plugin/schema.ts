import { array, object, string } from 'yup'
import type { UUID } from 'io-ts-types'
import type { InferType } from 'yup'

export const schema = object({
  uuid: string<UUID>().required().uuid(),
  name: string().required(),
  authorList: array(string<UUID>().required().uuid()).required().min(1),
  gameList: array(string<UUID>().required().uuid()).required().min(1),
})

export type Schema = InferType<typeof schema>
