import { Equal } from '@type-challenges/utils';

export type LookUp<T, U> = T extends { type: string }
    ? Equal<T['type'], U> extends true
        ? T
        : never
    : never;
