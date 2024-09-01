import type { UUID } from 'io-ts-types'
import type { InferType } from 'yup'
import { array, mixed, object, string } from 'yup'

type ProviderTypes = 'github'

const gitHubProvider = object({
  type: string().required(),
  owner: string().required(),
  repo: string().required(),
})

const type = object({ type: mixed<ProviderTypes>().oneOf(['github']) }).required()
const git = object().oneOf([gitHubProvider]).required()

export const schema = object({
  uuid: string<UUID>().required().uuid(),
  plugin: string<UUID>().required().uuid(),
  provider: gitHubProvider,
  gameList: array(object({
    uuid: string<UUID>().required(),
    regexList: array(object({
      uuid: string<UUID>().uuid().required(),
      value: string().required(),
    })).required().min(1),
  })).required().min(1),
})

export type Schema = InferType<typeof schema>
