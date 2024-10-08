import { exists } from '@tauri-apps/api/fs'
import { join } from '@tauri-apps/api/path'

export const useProvider = createGlobalState(() => {
  const path = useStorage('provider-root', '')
  const content = computedAsync(() => join(path.value, 'public'), '')

  const configured = useAsyncState(async () => {
    if (path.value.length <= 0) {
      console.debug('skip provider root path check')
      return false
    }

    if (await exists(path.value) === false) {
      console.debug('provider root path not exists')
      return false
    }

    if (await exists(content.value) === false) {
      console.debug('provider public path not exists')
      return false
    }

    return true
  }, false)

  return { configured, path, content }
})
