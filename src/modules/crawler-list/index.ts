import { CrawlerList } from '@shared/types/crawler/list'
import { createList } from '../utils/list'

export const useCrawlerList = createList({ name: 'crawler', codec: CrawlerList })
