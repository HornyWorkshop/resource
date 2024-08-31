export function useAsyncScope<TCallable, TDisposable>(disposable: () => Promise<TDisposable>) {
  return async (callable: () => Promise<TCallable>) => {
    try {
      return await callable()
    }
    finally {
      await disposable()
    }
  }
}
