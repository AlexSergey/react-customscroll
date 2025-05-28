export const on = (el: Document | HTMLElement | Window, events: string[], cb: Function): void => {
  events.forEach((event) => el.addEventListener(event, cb as EventListener));
};

export const off = (el: Document | HTMLElement | Window, events: string[], cb: Function): void => {
  events.forEach((event) => el.removeEventListener(event, cb as EventListener));
};
