const isFunction = fn => typeof fn === 'function';

const isDefined = value => typeof value !== 'undefined';

const isClient = () => document && document.getElementById;

const isObject = value => typeof value === 'object';

export {
    isObject,
    isFunction,
    isDefined,
    isClient
}