import { Equal } from "@type-challenges/utils";

export type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;

// const includes = (list, key) => {
//   function _(list, key) {
//     if (list.length === 0) return false;
//     const [first, ...rest] = list;
//     if (first === key) {
//       return true;
//     } else {
//       return _(rest,key);
//     }
//   }
//   return _(list,key);
// }
