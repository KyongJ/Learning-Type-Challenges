interface Chainable<Result = {}> {
    option<Key extends string, Val>(
        key: Key extends keyof Result ? never : Key,
        value: Val
    ): Chainable<Omit<Result, Key> & { [k in Key]: Val }>;
    get(): Result;
}
