declare type DiffPropertyNames<T extends string, U extends string> = { [P in T]: P extends U ? never: P }[T];

declare type Omit<T, K extends keyof T> = Pick<T, DiffPropertyNames<keyof T, K>>;

declare type Constructor<T = {}> = { new(...args: any[]): T };