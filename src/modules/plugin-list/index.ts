import type { PluginList } from '@shared/types/plugin/list'

export const usePluginList = createGlobalState(() => {
  const pluginList = ref([] as PluginList)

  return { pluginList }
})
