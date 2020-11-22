import React, { CSSProperties, Component, createRef } from 'react';
import { on, off } from './utils/events';
import { getScrollWidth } from './utils/getScrollWidth';
import { clearSelection } from './utils/clearSelection';
import { stylesFactory } from './styles';
import { scrollTo } from './modules/scrollTo';
import { mouseWithoutWindow } from './modules/mouse.without.window';
import { generateStyle } from './utils/generateStyle';
import { generateID } from './utils/generateID';
import {
  isObject,
  isDefined,
  isClient,
  isFunction
} from './utils/is';

import { State } from './types/state';
import { Props } from './types/props';

mouseWithoutWindow();

/**
 * This is min height for Scroll Bar.
 * If children content will be very big
 * Scroll Bar stay 20 pixels
 * */
const minHeightScrollBar = 20;
const defaultScrollWidth = 17;
const REINIT_MS = 250;
const SCROLL_WIDTH = getScrollWidth();
// If this is Safari / iPhone / iPad or other browser / device with scrollWidth === 0
const isZero = SCROLL_WIDTH === 0;

const getDefaultScrollWidth = (): number => (
  typeof SCROLL_WIDTH === 'number' ?
    SCROLL_WIDTH :
    0
);

class CustomScroll extends Component<Props, State> {
  private nextWrapperHeight = 0;

  private nextHolderHeight = 0;

  private scrollID: string = generateID();

  private readonly isVirtualized: boolean;

  private readonly interval;

  private scrollRun: (e) => void;

  private scrollBlock: HTMLDivElement;

  private customScroll: HTMLDivElement;

  private customScrollHolder: HTMLDivElement;

  private endScroll: () => void;

  private customScrollHolderRef: {
    current: HTMLDivElement;
  };

  private customScrollRef: {
    current: HTMLDivElement;
  };

  private customScrollFrameRef: {
    current: HTMLDivElement;
  };

  private scrollBarRef: {
    current: HTMLDivElement;
  };

  constructor(props) {
    super(props);

    ['scroll-area', 'scroll-area-holder', 'scrollBar', 'customScroll', 'customScrollHolder', 'customScrollFrame'].forEach(r => {
      this[`${r}Ref`] = createRef();
    });
    let scrollWidth = getDefaultScrollWidth();

    this.isVirtualized = isObject(props.virtualized);

    if (isZero) {
      scrollWidth = defaultScrollWidth;
    }

    const className = isDefined(props.className) ? props.className : 'react-customscroll';
    /**
     * Reinitialize scroll bar every 500 ms
     * */
    this.interval = setInterval(this.reinit, REINIT_MS);

    this.state = {
      scrollTop: 0,
      width: `calc(100% + ${scrollWidth}px)`,
      selection: true,
      scrollAreaShow: false,
      animate: props.animate || true,
      classes: {
        base: className,
        holder: `${className}-holder`,
        frame: `${className}-frame`,
        area: `${className}-scrollbar-area`,
        'area-holder': `${className}-scrollbar-holder`,
        'scroll-bar': `${className}-scrollbar`,
      },
      virtualState: this.isVirtualized ? this.getScrollBarStyles(props.scrollTo || 0) : null,
      styles: {
        scrollArea: {},
        scrollAreaFrame: {},
        scrollBar: {},
        ctmScroll: {},
        ctmScrollActive: {},
        ctmScrollFrame: {},
        noselect: {},
        ctmScrollHolder: {}
      }
    };

    if (isClient() && !document.getElementById(this.scrollID)) {
      generateStyle(`#${this.scrollID}::-webkit-scrollbar { opacity: 0 }
#${this.scrollID}::-webkit-scrollbar-track-piece { background-color: transparent }`, this.scrollID);
    }
  }

  componentDidMount(): void {
    /**
     * If mouse cursor gone outside window
     * Will trigger event 'mouseWithoutWindow'
     * And all listeners will remove
     * Content in scroll block will be selectable
     * */
    on(document, ['mouseWithoutWindow'], this.reset);
    on(window, ['resize'], this.restScrollAfterResize);

    this.scrollBlock = this.customScrollHolderRef.current;
    this.customScroll = this.customScrollRef.current;
    this.customScrollHolder = this.customScrollFrameRef.current;

    this.applyStyles();
  }

  componentDidUpdate(prevProps): void {
    let offsetY = this.props.scrollTo;

    // eslint-disable-next-line sonarjs/no-collapsible-if,no-restricted-globals
    if (isDefined(offsetY) && !isNaN(offsetY)) {
      if (prevProps.scrollTo !== offsetY) {
        if (this.isVirtualized) {
          offsetY = offsetY || 0;

          setTimeout(() => {
            this.setState({
              virtualState: this.getScrollBarStyles(offsetY)
            });
          });
        } else {
          scrollTo(this.scrollBlock, offsetY, this.state.animate);
        }
      }
    }
  }

  componentWillUnmount(): void {
    if (isClient()) {
      const el = document.getElementById(this.scrollID);
      if (el) {
        el.parentNode.removeChild(el);
      }
    }
    clearInterval(this.interval);
    this.removeListeners();
  }

  onClick = (evt): void => {
    evt.stopPropagation();
    evt.preventDefault();
    /**
     * If we clicked right mouse button we must skip this event
     * */
    let isRightMB;
    if ('which' in evt) {
      isRightMB = evt.which === 3;
    } else if ('button' in evt) {
      isRightMB = evt.button === 2;
    }
    if (isRightMB) {
      setTimeout(this.reset);
      return;
    }

    const elem = this.scrollBlock;
    const startPoint = evt.touches ? evt.touches[0].pageY : evt.pageY;

    const scrollTopOffset = this.isVirtualized ? (this.props.scrollTo || 0) : elem.scrollTop;
    this.blockSelection(false);

    this.scrollRun = (e) => {
      e.stopPropagation();
      e.preventDefault();
      const { holderHeight, wrapperHeight } = this.getParams();
      const diff = holderHeight / wrapperHeight;
      const pageY = e.touches ? e.touches[0].pageY : e.pageY;
      if (this.isVirtualized) {
        let scrollTop = ((pageY - startPoint) * diff) + scrollTopOffset;
        scrollTop = holderHeight - wrapperHeight <= scrollTop ? holderHeight - wrapperHeight : scrollTop;
        if (isFunction(this.props.scrollSync)) {
          this.props.scrollSync(scrollTop);
        }
      } else {
        scrollTo(elem, ((pageY - startPoint) * diff) + scrollTopOffset);
      }
    };

    this.endScroll = () => {
      this.reset();
    };

    on(document, ['mouseup', 'touchend'], this.endScroll);
    on(document, ['mousemove', 'touchmove'], this.scrollRun);
  };

  getParams(): { wrapperHeight: number; holderHeight: number; percentDiff: number; height: number } {
    let wrapperHeight = 0;
    let holderHeight = 0;
    let percentDiff = 0;
    let height = 0;

    if (!isClient()) {
      return {
        wrapperHeight,
        holderHeight,
        percentDiff,
        height
      };
    }

    const scrollArea = this['scroll-areaRef'].current;
    const paddings = window && scrollArea ?
      parseFloat(window.getComputedStyle(scrollArea, null)
        .getPropertyValue('padding-top')) +
      parseFloat(window.getComputedStyle(scrollArea, null)
        .getPropertyValue('padding-bottom')) :
      0;

    if (this.isVirtualized) {
      wrapperHeight = this.props.virtualized.height || 0;
      holderHeight = this.props.virtualized.scrollHeight || 0;
    } else {
      wrapperHeight = this.customScroll && this.customScroll.offsetHeight;
      holderHeight = this.customScroll && this.customScrollHolder.offsetHeight;
    }
    if (holderHeight === 0) {
      height = 0;
      percentDiff = 0;
    } else {
      percentDiff = (wrapperHeight - paddings) / holderHeight;
      height = wrapperHeight * percentDiff;
    }

    return {
      wrapperHeight: Math.ceil(wrapperHeight),
      holderHeight,
      percentDiff,
      height
    };
  }

  getScrollBarStyles(offsetY = 0): { top: number; height: number } {
    const { holderHeight, percentDiff, height } = this.getParams();

    if (holderHeight === 0 && percentDiff === 0 && height === 0) {
      return {
        top: 0,
        height: 0
      };
    }

    const scrollTop = this.isVirtualized ? offsetY : this.state.scrollTop || this.scrollBlock.scrollTop;

    const newPercentDiff = height < minHeightScrollBar ?
      percentDiff - ((minHeightScrollBar - height) / holderHeight) :
      percentDiff;

    const scrollBarHeight = height < minHeightScrollBar ? minHeightScrollBar : height;

    return {
      top: scrollTop * newPercentDiff,
      height: scrollBarHeight
    };
  }

  setY(value): void {
    scrollTo(this.scrollBlock, value, this.state.animate);
  }

  reset = (): void => {
    this.removeListeners();
    this.blockSelection(true);
  };

  restScrollAfterResize = (): void => {
    this.nextWrapperHeight = 0;
    this.nextHolderHeight = 0;
  };

  jump = (e): void => {
    const y = e.touches ? e.touches[0].pageY : e.pageY;
    let scrollBar = this.scrollBarRef.current as { offsetTop: number; offsetHeight: number };
    let scrollPosition = this.scrollBlock.scrollTop;
    const { wrapperHeight } = this.getParams();
    const topOffset = this.scrollBlock.getBoundingClientRect().top;

    if (this.isVirtualized) {
      scrollPosition = this.props.scrollTo || 0;
      scrollBar = {
        offsetTop: this.state.virtualState.top,
        offsetHeight: this.state.virtualState.height
      };
    }
    if (y < (topOffset + scrollBar.offsetTop) ||
      y > (topOffset + scrollBar.offsetTop + scrollBar.offsetHeight)) {
      const offset = topOffset + scrollBar.offsetTop <= y ? 1 : -1;
      const scrollY = (scrollPosition + (wrapperHeight * offset));
      if (this.isVirtualized) {
        if (isFunction(this.props.scrollSync)) {
          this.props.scrollSync(scrollY);
        }
      } else {
        scrollTo(this.scrollBlock, scrollY);
      }
    }
  };

  reinit = (): void => {
    const { wrapperHeight, holderHeight } = this.getParams();

    if ((wrapperHeight !== this.nextWrapperHeight) ||
      (holderHeight !== this.nextHolderHeight)) {
      if (this.isVirtualized) {
        const scrollPosition = this.props.scrollTo || 0;
        const virtualState = this.getScrollBarStyles(scrollPosition);
        this.setState({
          virtualState,
          scrollAreaShow: holderHeight > wrapperHeight
        });
      } else {
        this.setState({
          scrollAreaShow: holderHeight > wrapperHeight
        });
      }
    }

    this.nextWrapperHeight = wrapperHeight;
    this.nextHolderHeight = holderHeight;
  };

  scroll = (): void => {
    this.setState({
      scrollTop: this.scrollBlock.scrollTop
    });
  };

  removeListeners(): void {
    off(document, ['mouseWithoutWindow'], this.reset);
    off(window, ['resize'], this.restScrollAfterResize);
    off(document, ['mouseup', 'touchend'], this.endScroll);
    off(document, ['mousemove', 'touchmove'], this.scrollRun);
  }

  blockSelection(state): void {
    if (!state) {
      clearSelection();
    }
    this.setState({ selection: !!state });
  }

  applyStyles(): void {
    const scrollWidth = getDefaultScrollWidth();

    this.setState(state => (
      Object.assign(state, {
        styles: stylesFactory({
          virtualized: this.isVirtualized,
          isZero,
          originalScrollWidth: scrollWidth,
          scrollWidth: isDefined(this.props.scrollWidth) ? this.props.scrollWidth : '6px',
          scrollAreaColor: isDefined(this.props.scrollAreaColor) ? this.props.scrollAreaColor : '#494949',
          scrollBarRadius: isDefined(this.props.scrollBarRadius) ? this.props.scrollBarRadius : '6px',
          scrollBarColor: isDefined(this.props.scrollBarColor) ? this.props.scrollBarColor : '#aeaeae'
        }, !!this.props.rtl)
      })
    ));
  }

  render(): JSX.Element {
    const ctmScroll = !this.state.selection ?
      Object.assign({}, this.state.styles.ctmScroll, this.state.styles.noselect) :
      this.state.styles.ctmScroll;
    const ctmScrollFrame = this.state.scrollAreaShow ?
      Object.assign({}, this.state.styles.ctmScrollFrame, this.state.styles.ctmScrollActive) :
      this.state.styles.ctmScrollFrame;

    return (
      <div
        ref={this.customScrollRef}
        style={Object.assign({ boxSizing: 'border-box' }, ctmScroll) as CSSProperties}
        className={this.state.classes.base}
        suppressHydrationWarning
      >
        <div
          ref={this.customScrollHolderRef}
          style={Object.assign({ boxSizing: 'border-box' }, { width: this.state.width }, this.state.styles.ctmScrollHolder) as CSSProperties}
          onScroll={this.scroll}
          className={this.state.classes.holder}
          id={this.scrollID}
          suppressHydrationWarning
        >
          <div
            ref={this.customScrollFrameRef}
            style={Object.assign({ boxSizing: 'border-box' }, ctmScrollFrame, isZero ?
              { width: '100%' } : {}) as CSSProperties}
            className={this.state.classes.frame}
            suppressHydrationWarning
          >
            {isFunction(this.props.children) ?
              this.props.children(this.scrollBlock && this.scrollBlock.scrollTop ?
                this.scrollBlock.scrollTop :
                0) :
              this.props.children}
          </div>
          {this.state.scrollAreaShow ? (
            <div
              ref={this['scroll-areaRef']}
              style={this.state.styles.scrollArea}
              onClick={this.jump}
              className={this.state.classes.area}
            >
              <div
                ref={this['scroll-area-holderRef']}
                style={this.state.styles.scrollAreaFrame}
                className={this.state.classes['area-holder']}
              >
                <div
                  ref={this.scrollBarRef}
                  style={
                    Object.assign({}, this.state.styles.scrollBar, this.isVirtualized ?
                      this.state.virtualState :
                      this.getScrollBarStyles())
                  }
                  onMouseDown={this.onClick}
                  onTouchStart={this.onClick}
                  className={this.state.classes['scroll-bar']}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export { CustomScroll, getDefaultScrollWidth };
