type Last<T extends any[]> = T extends [...infer Front, infer Last] ? Last : never;
