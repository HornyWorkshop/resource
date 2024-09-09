import { array } from 'io-ts'
import type { TypeOf } from 'io-ts'
import { Regex } from './regex'

export const RegexList = array(Regex)

export type RegexList = TypeOf<typeof RegexList>
