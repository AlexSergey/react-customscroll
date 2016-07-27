export function on(el, events, cb) {
    events.forEach(function(event) {
        el.addEventListener(event, cb);
    });
}
export function off(el, events, cb) {
    events.forEach(function(event) {
        el.removeEventListener(event, cb);
    });
}