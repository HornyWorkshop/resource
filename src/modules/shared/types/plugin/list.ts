import type { TypeOf } from 'io-ts'
import { array } from 'io-ts'
import { Plugin } from '.'

export const PluginList = array(Plugin)

export type PluginList = TypeOf<typeof PluginList>
