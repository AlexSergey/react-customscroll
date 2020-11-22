const isFunction = (fn: unknown): boolean => typeof fn === 'function';

const isDefined = (value: unknown): boolean => typeof value !== 'undefined';

const isClient = (): boolean => typeof window !== 'undefined';

const isObject = (value: unknown): boolean => typeof value === 'object';

export {
  isObject,
  isFunction,
  isDefined,
  isClient
};
