type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer P}${From}${infer U}`
  ? `${P}${To}${U}`
  : S;
