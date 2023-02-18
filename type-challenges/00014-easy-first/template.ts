type First<T extends any[]> = T extends [infer Item, ...any] ? Item : never;
