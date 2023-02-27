type Without<T extends any[], U extends number | number[]> =
  T extends [infer F, ...infer R] ? F extends (U extends number[] ? U[number] : U) ? Without<R, U> : [F, ...Without<R,U>] : []
