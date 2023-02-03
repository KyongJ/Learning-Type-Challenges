type Replace<
    T extends string,
    U extends string,
    K extends string
> = T extends `${infer First}${Exclude<U, ''>}${infer Last}` ? `${First}${K}${Last}` : T;
