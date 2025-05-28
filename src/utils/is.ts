const isFunction = (fn: unknown): fn is Function => typeof fn === "function";

const isDefined = (value: unknown): boolean => typeof value !== "undefined";

const isClient = (): boolean => typeof window !== "undefined";

const isObject = (value: unknown): boolean => typeof value === "object";

export { isClient, isDefined, isFunction, isObject };
