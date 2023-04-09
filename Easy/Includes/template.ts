import { Equal } from '@type-challenges/utils';

export type Includes<T extends any[], K> = T extends [infer X, ...infer Rest]
    ? Equal<X, K> extends true
        ? true
        : Includes<Rest, K>
    : false;
