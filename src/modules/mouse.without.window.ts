import { isClient } from '../utils/is';

const fire = (): void => {
  const event = document.createEvent('Event');
  event.initEvent('mouseWithoutWindow', true, true);
  document.dispatchEvent(event);
};

const MouseWithoutWindow = (() => {
  let instance;

  const createInstance = (): boolean => {
    document.addEventListener('mouseup', (e) => {
      const w = window;
      const d = document;
      const el = d.documentElement;
      const body = d.getElementsByTagName('body')[0];
      const width = w.innerWidth || el.clientWidth || body.clientWidth;
      const height = w.innerHeight || el.clientHeight || body.clientHeight;

      if (
        (
          e.clientX >= width ||
          e.clientX < 0
        ) ||
        (
          e.clientY >= height ||
          e.clientY < 0
        )
      ) {
        fire();
      }
    });

    window.addEventListener('blur', () => {
      fire();
    });

    return true;
  };

  return {
    getInstance: (): void => {
      if (instance) {
        return instance;
      }
      instance = createInstance();
    }
  };
})();

export const mouseWithoutWindow = (): void => {
  if (isClient()) {
    MouseWithoutWindow.getInstance();
  }
};
