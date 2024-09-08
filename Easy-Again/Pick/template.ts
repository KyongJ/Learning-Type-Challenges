type MyPick1<T, K extends keyof T> = {
    [P in K]: T[P];
};
