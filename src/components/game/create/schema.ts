import type { InferType } from 'yup'
import { array, boolean, object, string } from 'yup'

export const schema = object({
  uuid: string().required().uuid(),
  name: string().required(),
  directory: string().required(),
  exeList: array(object({
    name: string().required(),
    run: boolean().required(),
  })).required().min(1),
}).strict()

export type Schema = InferType<typeof schema>
