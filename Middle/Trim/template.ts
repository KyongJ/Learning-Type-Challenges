type Blank = ' ' | '\t' | '\n';

type Trim<T extends string> = T extends `${Blank}${infer Rest}`
    ? Trim<Rest>
    : T extends `${infer Front}${Blank}`
    ? Trim<Front>
    : T;
