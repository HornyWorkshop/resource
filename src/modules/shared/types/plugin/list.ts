import { record, type TypeOf } from 'io-ts'
import { UUID } from 'io-ts-types'
import { Plugin } from '.'

export const PluginList = record(UUID, Plugin)

export type PluginList = TypeOf<typeof PluginList>
