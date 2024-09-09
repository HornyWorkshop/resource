import { exists } from '@tauri-apps/api/fs'
import { join } from '@tauri-apps/api/path'

export const useClient = createGlobalState(() => {
  const path = useStorage('client-root', '')
  const content = computedAsync(() => join(path.value, 'public'), '')

  const configured = useAsyncState(async () => {
    if (path.value.length <= 0) {
      console.debug('skip client root path check')
      return false
    }

    if (await exists(path.value) === false) {
      console.debug('client root path not exists')
      return false
    }

    if (await exists(content.value) === false) {
      console.debug('client public path not exists')
      return false
    }

    return true
  }, false)

  return { configured, path, content }
})
