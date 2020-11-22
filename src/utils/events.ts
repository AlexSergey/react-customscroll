export const on = (el: HTMLElement | Window | Document, events: Array<string>, cb: Function): void => {
  events.forEach(event => el.addEventListener(event, cb as EventListener));
};

export const off = (el: HTMLElement | Window | Document, events: Array<string>, cb: Function): void => {
  events.forEach((event) => el.removeEventListener(event, cb as EventListener));
};
