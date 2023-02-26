type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never;
}



type Result = Merge<{
  a: number;
  b: string;
}, {
  b: number;
  c: boolean;
}>
