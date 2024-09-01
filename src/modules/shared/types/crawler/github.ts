import { string, type } from 'io-ts'

export const GitHub = type({
  owner: string,
  repo: string,
})
