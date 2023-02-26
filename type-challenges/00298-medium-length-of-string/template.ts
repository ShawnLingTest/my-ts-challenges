
type StringToArray<S extends string> = S extends `${infer F}${infer R}` ? [F, ...StringToArray<R>] : [];

type LengthOfString<S extends string> = S extends `` ? 0 : StringToArray<S>['length'];
