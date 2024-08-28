import type { InferType } from 'yup'
import { array, object, string } from 'yup'

export const schema = object({
  uuid: string().required().uuid(),
  github: object({
    owner: string().required(),
    repo: string().required(),
  }).required(),
  gameList: array(object({
    uuid: string().required(),
    regex: array(string().required()).required().min(1),
  })).required().min(1),
}).strict()

export type Schema = InferType<typeof schema>
