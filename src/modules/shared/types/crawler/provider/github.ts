import { intersection, literal, type } from 'io-ts'
import { GitHub } from '../github'

export const GitHubProvider = intersection([
  type({ type: literal('github') }),
  GitHub,
])
