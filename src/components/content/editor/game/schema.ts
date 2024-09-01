import type { UUID } from 'io-ts-types'
import type { InferType } from 'yup'
import { array, boolean, object, string } from 'yup'

export const schema = object({
  uuid: string<UUID>().required().uuid(),
  name: string().required(),
  directory: string().required(),
  exeList: array(object({
    name: string().required(),
    exe: string().required(),
    run: boolean().required(),
  })).required().min(1).test('run', 'at least one executable must be marked as runnable.', e => e.some(e => e.run)),
})

export type Schema = InferType<typeof schema>
