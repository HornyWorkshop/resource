import { getOrElse } from 'fp-ts/Either'
import { flow } from 'fp-ts/function'
import { failure } from 'io-ts/PathReporter'
import type { Decoder, Errors, Type } from 'io-ts'

export function cast<O, A>(codec: Type<A, O>): (value: O) => A

export function cast<I, A>(codec: Decoder<I, A>): (value: I) => A

export function cast<I, A>(codec: Decoder<I, A>): (value: I) => A {
  return flow(
    codec.decode,
    getOrElse<Errors, A>((errors) => {
      throw new Error(failure(errors).join('\n'))
    }),
  )
}
