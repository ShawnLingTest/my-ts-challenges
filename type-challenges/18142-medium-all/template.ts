import { Equal } from "@type-challenges/utils";

export type All<T extends any[], U> = Equal<T[number], U> extends true ? true : false
