type Join<T, U extends string | number> = T extends [infer F extends string, ...infer O]
  ? `${F}${O extends [] ? "" : U}${Join<O, U>}`
  : "";
