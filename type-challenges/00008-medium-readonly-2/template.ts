type MyReadonly2<T, K extends keyof T = any> = {
  readonly [P in keyof T]: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};
