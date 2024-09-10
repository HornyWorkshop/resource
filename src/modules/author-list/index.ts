import { AuthorList } from '@shared/types/author/list'
import { createList } from '../utils/list'

export const useAuthorList = createList({ name: 'author', codec: AuthorList })
