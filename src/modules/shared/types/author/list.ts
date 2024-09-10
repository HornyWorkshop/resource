import { record } from 'io-ts'
import { UUID } from 'io-ts-types'
import type { TypeOf } from 'io-ts'
import { Author } from '.'

export const AuthorList = record(UUID, Author)
export type AuthorList = TypeOf<typeof AuthorList>
