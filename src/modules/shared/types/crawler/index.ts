import { type } from 'io-ts'
import { UUID } from 'io-ts-types'
import type { TypeOf } from 'io-ts'
import { PluginList } from './plugin/list'
import { Provider } from './provider'

export const Crawler = type({
  uuid: UUID,
  provider: Provider,
  pluginList: PluginList,
})

export type Crawler = TypeOf<typeof Crawler>
