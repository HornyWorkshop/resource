import type { TypeOf } from 'io-ts'
import { union } from 'io-ts'
import { GitHubProvider } from './github'

export const Provider = union([GitHubProvider, GitHubProvider])

export type Provider = TypeOf<typeof Provider>
