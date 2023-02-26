type Split<S extends string, SEP extends string> = string extends S ? string[] :
  S extends `${infer A}${SEP}${infer C}` ? [A,...Split<C,SEP>] : SEP extends "" ? [] : [S]
