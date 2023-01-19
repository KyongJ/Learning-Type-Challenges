type IsBlank<S extends string> = S extends ' ' | '\n' | '\t' ? true : false;

type TrimLeft<T extends string> = T extends `${infer First}${infer Rest}`
    ? IsBlank<First> extends true
        ? TrimLeft<Rest>
        : T
    : T;
