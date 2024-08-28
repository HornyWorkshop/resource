export const usePluginList = createGlobalState(() => {
  const pluginList = ref([])

  return { pluginList }
})
