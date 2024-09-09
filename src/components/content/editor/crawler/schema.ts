import { array, object, string } from 'yup'
import type { UUID } from 'io-ts-types'
import type { InferType } from 'yup'

const gitHubProvider = object({
  type: string().oneOf(['github']).required(),
  owner: string().required(),
  repo: string().required(),
})

export const schema = object({
  uuid: string<UUID>().required().uuid(),

  // TODO
  provider: gitHubProvider,

  pluginList: array(object({
    uuid: string<UUID>().required().uuid(),
    gameList: array(object({
      uuid: string<UUID>().required(),
      regexList: array(object({
        uuid: string<UUID>().uuid().required(),
        value: string().required(),
      })).required().min(1),
    })).required().min(1),
  })).required().min(1),
})

export type Schema = InferType<typeof schema>
