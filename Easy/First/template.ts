type MyFirst<T extends Array<unknown>> = T extends [infer X, ...infer Rest] ? X : never;
