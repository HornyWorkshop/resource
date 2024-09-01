import type { TypeOf } from 'io-ts'
import { array, boolean, string, type } from 'io-ts'

export const Exe = type({
  name: string,
  exe: string,
  run: boolean,
})

export const ExeList = array(Exe)

export type Exe = TypeOf<typeof Exe>
export type ExeList = TypeOf<typeof ExeList>
