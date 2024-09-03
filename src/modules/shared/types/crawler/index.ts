import type { TypeOf } from 'io-ts'
import { type } from 'io-ts'
import { UUID } from 'io-ts-types'
import { Provider } from './provider'
import { PluginList } from './plugin/list'

export const Crawler = type({
  uuid: UUID,
  provider: Provider,
  pluginList: PluginList,
})

export type Crawler = TypeOf<typeof Crawler>
