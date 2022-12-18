type MyAwaited<T extends { then: (onfulfilled: any) => any }> = T extends {
    then: (onfulfilled: (arg: infer U) => any) => any;
}
    ? U extends Promise<unknown>
        ? MyAwaited<U>
        : U
    : never;
