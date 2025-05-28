import React, { Component, createRef, CSSProperties, ReactNode } from "react";

import { mouseWithoutWindow } from "./modules/mouse.without.window";
import { scrollTo } from "./modules/scroll-to";
import { stylesFactory } from "./styles";
import { Props } from "./types/props";
import { State } from "./types/state";
import { clearSelection } from "./utils/clear-selection";
import { off, on } from "./utils/events";
import { generateId } from "./utils/generate-id";
import { generateStyle } from "./utils/generate-style";
import { getScrollWidth } from "./utils/get-scroll-width";
import { isClient, isDefined, isFunction, isObject } from "./utils/is";

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

const getDefaultScrollWidth = (): number => (typeof SCROLL_WIDTH === "number" ? SCROLL_WIDTH : 0);

class CustomScroll extends Component<Props, State> {
  private customScroll: HTMLDivElement;

  private customScrollFrameRef: {
    current: HTMLDivElement;
  };

  private customScrollHolder: HTMLDivElement;

  private customScrollHolderRef: {
    current: HTMLDivElement;
  };

  private customScrollRef: {
    current: HTMLDivElement;
  };

  private endScroll: () => void;

  private interval;

  private readonly isVirtualized: boolean;

  private nextHolderHeight = 0;

  private nextWrapperHeight = 0;

  private scrollBarRef: {
    current: HTMLDivElement;
  };

  private scrollBlock: HTMLDivElement;

  private scrollID: string = generateId();

  private scrollRun: (e) => void;

  constructor(props) {
    super(props);

    [
      "scroll-area",
      "scroll-area-holder",
      "scrollBar",
      "customScroll",
      "customScrollHolder",
      "customScrollFrame",
    ].forEach((r) => {
      this[`${r}Ref`] = createRef();
    });
    let scrollWidth = getDefaultScrollWidth();

    this.isVirtualized = isObject(props.virtualized);

    if (isZero) {
      scrollWidth = defaultScrollWidth;
    }

    const className = isDefined(props.className) ? props.className : "react-customscroll";

    this.state = {
      animate: props.animate || true,
      classes: {
        area: `${className}-scrollbar-area`,
        "area-holder": `${className}-scrollbar-holder`,
        base: className,
        frame: `${className}-frame`,
        holder: `${className}-holder`,
        "scroll-bar": `${className}-scrollbar`,
      },
      scrollAreaShow: false,
      scrollTop: 0,
      selection: true,
      styles: {
        ctmScroll: {},
        ctmScrollActive: {},
        ctmScrollFrame: {},
        ctmScrollHolder: {},
        noselect: {},
        scrollArea: {},
        scrollAreaFrame: {},
        scrollBar: {},
      },
      virtualState: this.isVirtualized ? this.getScrollBarStyles(props.scrollTo || 0) : null,
      width: `calc(100% + ${scrollWidth}px)`,
    };

    if (isClient() && !document.getElementById(this.scrollID)) {
      generateStyle(
        `#${this.scrollID}::-webkit-scrollbar { opacity: 0 }
#${this.scrollID}::-webkit-scrollbar-track-piece { background-color: transparent }`,
        this.scrollID,
      );
    }
  }

  applyStyles(): void {
    const scrollWidth = getDefaultScrollWidth();

    this.setState((state) =>
      Object.assign(state, {
        styles: stylesFactory(
          {
            isZero,
            originalScrollWidth: scrollWidth,
            scrollAreaColor: isDefined(this.props.scrollAreaColor) ? this.props.scrollAreaColor : "#494949",
            scrollBarColor: isDefined(this.props.scrollBarColor) ? this.props.scrollBarColor : "#aeaeae",
            scrollBarRadius: isDefined(this.props.scrollBarRadius) ? this.props.scrollBarRadius : "6px",
            scrollWidth: isDefined(this.props.scrollWidth) ? this.props.scrollWidth : "6px",
            virtualized: this.isVirtualized,
          },
          !!this.props.rtl,
        ),
      }),
    );
  }

  blockSelection(state): void {
    if (!state) {
      clearSelection();
    }
    this.setState({ selection: !!state });
  }

  override componentDidMount(): void {
    /**
     * If mouse cursor gone outside window
     * Will trigger event 'mouseWithoutWindow'
     * And all listeners will remove
     * Content in scroll block will be selectable
     * */
    on(document, ["mouseWithoutWindow"], this.reset);
    on(window, ["resize"], this.restScrollAfterResize);

    this.scrollBlock = this.customScrollHolderRef.current;
    this.customScroll = this.customScrollRef.current;
    this.customScrollHolder = this.customScrollFrameRef.current;

    this.applyStyles();

    /**
     * Reinitialize scroll bar every 250 ms
     * */
    this.interval = setInterval(this.reinit, REINIT_MS);
  }

  override componentDidUpdate(prevProps): void {
    let offsetY = this.props.scrollTo;

    if (isDefined(offsetY) && !isNaN(offsetY)) {
      if (prevProps.scrollTo !== offsetY) {
        if (this.isVirtualized) {
          offsetY = offsetY || 0;

          setTimeout(() => {
            this.setState({
              virtualState: this.getScrollBarStyles(offsetY),
            });
          });
        } else {
          scrollTo(this.scrollBlock, offsetY, this.state.animate);
        }
      }
    }
  }

  override componentWillUnmount(): void {
    if (isClient()) {
      const el = document.getElementById(this.scrollID);
      if (el) {
        el.parentNode.removeChild(el);
      }
    }
    clearInterval(this.interval);
    this.removeListeners();
  }

  getParams(): { height: number; holderHeight: number; percentDiff: number; wrapperHeight: number } {
    let wrapperHeight = 0;
    let holderHeight = 0;
    let percentDiff = 0;
    let height = 0;

    if (!isClient()) {
      return {
        height,
        holderHeight,
        percentDiff,
        wrapperHeight,
      };
    }

    const scrollArea = this["scroll-areaRef"].current;
    const paddings =
      window && scrollArea
        ? parseFloat(window.getComputedStyle(scrollArea, null).getPropertyValue("padding-top")) +
          parseFloat(window.getComputedStyle(scrollArea, null).getPropertyValue("padding-bottom"))
        : 0;

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
      height,
      holderHeight,
      percentDiff,
      wrapperHeight: Math.ceil(wrapperHeight),
    };
  }

  getScrollBarStyles(offsetY = 0): { height: number; top: number } {
    const { height, holderHeight, percentDiff } = this.getParams();

    if (holderHeight === 0 && percentDiff === 0 && height === 0) {
      return {
        height: 0,
        top: 0,
      };
    }

    const scrollTop = this.isVirtualized ? offsetY : this.state.scrollTop || this.scrollBlock.scrollTop;

    const newPercentDiff =
      height < minHeightScrollBar ? percentDiff - (minHeightScrollBar - height) / holderHeight : percentDiff;

    const scrollBarHeight = height < minHeightScrollBar ? minHeightScrollBar : height;

    return {
      height: scrollBarHeight,
      top: scrollTop * newPercentDiff,
    };
  }

  jump = (e): void => {
    const y = e.touches ? e.touches[0].pageY : e.pageY;
    let scrollBar = this.scrollBarRef.current as { offsetHeight: number; offsetTop: number };
    let scrollPosition = this.scrollBlock.scrollTop;
    const { wrapperHeight } = this.getParams();
    const topOffset = this.scrollBlock.getBoundingClientRect().top;

    if (this.isVirtualized) {
      scrollPosition = this.props.scrollTo || 0;
      scrollBar = {
        offsetHeight: this.state.virtualState.height,
        offsetTop: this.state.virtualState.top,
      };
    }
    if (y < topOffset + scrollBar.offsetTop || y > topOffset + scrollBar.offsetTop + scrollBar.offsetHeight) {
      const offset = topOffset + scrollBar.offsetTop <= y ? 1 : -1;
      const scrollY = scrollPosition + wrapperHeight * offset;
      if (this.isVirtualized) {
        if (isFunction(this.props.scrollSync)) {
          this.props.scrollSync(scrollY);
        }
      } else {
        scrollTo(this.scrollBlock, scrollY);
      }
    }
  };

  onClick = (evt): void => {
    evt.stopPropagation();
    evt.preventDefault();
    /**
     * If we clicked right mouse button we must skip this event
     * */
    let isRightMB;
    if ("which" in evt) {
      isRightMB = evt.which === 3;
    } else if ("button" in evt) {
      isRightMB = evt.button === 2;
    }
    if (isRightMB) {
      setTimeout(this.reset);

      return;
    }

    const elem = this.scrollBlock;
    const startPoint = evt.touches ? evt.touches[0].pageY : evt.pageY;

    const scrollTopOffset = this.isVirtualized ? this.props.scrollTo || 0 : elem.scrollTop;
    this.blockSelection(false);

    this.scrollRun = (e): void => {
      e.stopPropagation();
      e.preventDefault();
      const { holderHeight, wrapperHeight } = this.getParams();
      const diff = holderHeight / wrapperHeight;
      const pageY = e.touches ? e.touches[0].pageY : e.pageY;
      if (this.isVirtualized) {
        let scrollTop = (pageY - startPoint) * diff + scrollTopOffset;
        scrollTop = holderHeight - wrapperHeight <= scrollTop ? holderHeight - wrapperHeight : scrollTop;
        if (isFunction(this.props.scrollSync)) {
          this.props.scrollSync(scrollTop);
        }
      } else {
        scrollTo(elem, (pageY - startPoint) * diff + scrollTopOffset);
      }
    };

    this.endScroll = (): void => {
      this.reset();
    };

    on(document, ["mouseup", "touchend"], this.endScroll);
    on(document, ["mousemove", "touchmove"], this.scrollRun);
  };

  reinit = (): void => {
    const { holderHeight, wrapperHeight } = this.getParams();

    if (wrapperHeight !== this.nextWrapperHeight || holderHeight !== this.nextHolderHeight) {
      if (this.isVirtualized) {
        const scrollPosition = this.props.scrollTo || 0;
        const virtualState = this.getScrollBarStyles(scrollPosition);
        this.setState({
          scrollAreaShow: holderHeight > wrapperHeight,
          virtualState,
        });
      } else {
        this.setState({
          scrollAreaShow: holderHeight > wrapperHeight,
        });
      }
    }

    this.nextWrapperHeight = wrapperHeight;
    this.nextHolderHeight = holderHeight;
  };

  removeListeners(): void {
    off(document, ["mouseWithoutWindow"], this.reset);
    off(window, ["resize"], this.restScrollAfterResize);
    off(document, ["mouseup", "touchend"], this.endScroll);
    off(document, ["mousemove", "touchmove"], this.scrollRun);
  }

  override render(): ReactNode {
    const ctmScroll = !this.state.selection
      ? Object.assign({}, this.state.styles.ctmScroll, this.state.styles.noselect)
      : this.state.styles.ctmScroll;
    const ctmScrollFrame = this.state.scrollAreaShow
      ? Object.assign({}, this.state.styles.ctmScrollFrame, this.state.styles.ctmScrollActive)
      : this.state.styles.ctmScrollFrame;

    return (
      <div
        className={this.state.classes.base}
        ref={this.customScrollRef}
        style={Object.assign({ boxSizing: "border-box" }, ctmScroll) as CSSProperties}
        suppressHydrationWarning
      >
        <div
          className={this.state.classes.holder}
          id={this.scrollID}
          onScroll={this.scroll}
          ref={this.customScrollHolderRef}
          style={
            Object.assign(
              { boxSizing: "border-box" },
              { width: this.state.width },
              this.state.styles.ctmScrollHolder,
            ) as CSSProperties
          }
          suppressHydrationWarning
        >
          <div
            className={this.state.classes.frame}
            ref={this.customScrollFrameRef}
            style={
              Object.assign(
                { boxSizing: "border-box" },
                ctmScrollFrame,
                isZero ? { width: "100%" } : {},
              ) as CSSProperties
            }
            suppressHydrationWarning
          >
            {isFunction(this.props.children)
              ? this.props.children(this.scrollBlock && this.scrollBlock.scrollTop ? this.scrollBlock.scrollTop : 0)
              : this.props.children}
          </div>
          {this.state.scrollAreaShow ? (
            <div
              className={this.state.classes.area}
              onClick={this.jump}
              ref={this["scroll-areaRef"]}
              style={this.state.styles.scrollArea}
            >
              <div
                className={this.state.classes["area-holder"]}
                ref={this["scroll-area-holderRef"]}
                style={this.state.styles.scrollAreaFrame}
              >
                <div
                  className={this.state.classes["scroll-bar"]}
                  onMouseDown={this.onClick}
                  onTouchStart={this.onClick}
                  ref={this.scrollBarRef}
                  style={Object.assign(
                    {},
                    this.state.styles.scrollBar,
                    this.isVirtualized ? this.state.virtualState : this.getScrollBarStyles(),
                  )}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  reset = (): void => {
    this.removeListeners();
    this.blockSelection(true);
  };

  restScrollAfterResize = (): void => {
    this.nextWrapperHeight = 0;
    this.nextHolderHeight = 0;
  };

  scroll = (): void => {
    this.setState({
      scrollTop: this.scrollBlock.scrollTop,
    });
  };

  setY(value: number): void {
    scrollTo(this.scrollBlock, value, this.state.animate);
  }
}

export { CustomScroll, getDefaultScrollWidth };
