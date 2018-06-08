declare type DiffPropertyNames<T extends string | number | symbol, U> =
    { [P in T]: P extends U ? never: P }[T];

declare type Omit<T, K> = Pick<T, DiffPropertyNames<keyof T, K>>;

declare type Constructor<T = {}> = { new(...args: any[]): T };