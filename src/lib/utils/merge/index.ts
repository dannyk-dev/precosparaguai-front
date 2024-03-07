type Merge<T extends object, U extends object> = Omit<T, keyof U> & {
    [K in keyof T & keyof U]: U[K] extends object
        ? U[K] extends any[]
            ? U[K]
            : T[K] extends object
              ? Merge<T[K], U[K]> extends infer A
                  ? Cast<A, object>
                  : never
              : U[K]
        : U[K];
} & Omit<U, keyof T>;

type Cast<T, U> = T extends U ? T : U;

const forOwn = <T extends object>(
    object: T,
    iter: (value: T[keyof T], key: keyof T) => boolean | void
): T => {
    if (object) {
        const keys = Object.keys(object) as Array<keyof T>;

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];

            if (key !== '__proto__') {
                if (iter(object[key], key) === false) {
                    break;
                }
            }
        }
    }

    return object;
};

const isObject = (subject: unknown): subject is object => {
    return subject !== null && typeof subject === 'object';
};

export const merge = <T extends object, U extends object>(
    object: T,
    source: U
): Merge<T, U> => {
    const merged = object as any;

    forOwn(source, (value, key) => {
        if (Array.isArray(value)) {
            merged[key] = value.slice();
        } else if (isObject(value)) {
            merged[key] = merge(
                isObject(merged[key]) ? merged[key] : {},
                value
            );
        } else {
            merged[key] = value;
        }
    });

    return merged as Merge<T, U>;
};
