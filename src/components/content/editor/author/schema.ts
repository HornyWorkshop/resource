import { object, string } from 'yup'
import type { UUID } from 'io-ts-types'
import type { InferType } from 'yup'

export const schema = object({
  uuid: string<UUID>().required().uuid(),
  name: string().required(),
})

export type Schema = InferType<typeof schema>
