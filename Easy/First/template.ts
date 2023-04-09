type First<T extends any[]> = T extends [infer X, ...infer Rest] ? X : never;
