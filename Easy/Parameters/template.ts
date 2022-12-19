type MyParameters<T extends Function> = T extends (...arg: infer R) => unknown ? R : [];
