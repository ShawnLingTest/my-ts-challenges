type RequiredKeys<T> = keyof {
  [P in keyof T as {} extends Pick<T, P> ? never: P]: T[P]
}
