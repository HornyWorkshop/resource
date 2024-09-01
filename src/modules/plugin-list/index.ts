import { PluginList } from '@shared/types/plugin/list'
import { createList } from '../utils/list'

export const usePluginList = createList({ name: 'plugin', codec: PluginList })
