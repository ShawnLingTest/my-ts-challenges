import { Equal } from "@type-challenges/utils"

type IsReadOnly<T, P extends keyof T> = Equal<Pick<T, P>, {readonly [K in P]: T[P]}>

export type GetReadonlyKeys<T> = keyof {
  [P in keyof T as IsReadOnly<T, P> extends true ? P : never]: T[P]
}
