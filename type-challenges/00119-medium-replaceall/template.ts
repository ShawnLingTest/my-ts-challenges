type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends "" ? S : S extends `${infer F}${From}${infer O}`
  ? `${F}${To}${ReplaceAll<O, From, To>}`  : S;
