const _scrollTo = (element: HTMLDivElement, to: number, duration: number): void => {
  if (duration <= 0) {
    return;
  }
  const difference = to - element.scrollTop;
  const perTick = (difference / duration) * 10;

  setTimeout(() => {
    element.scrollTop += perTick;
    if (element.scrollTop === to) {
      return;
    }
    _scrollTo(element, to, duration - 10);
  }, 10);
};

export const scrollTo = (domEl: HTMLDivElement, offsetY: number, animate?: boolean): void => {
  if (animate) {
    _scrollTo(domEl, offsetY, 500);
  } else {
    domEl.scrollTop = offsetY;
  }
};
