import React, {Component} from 'react';
import {on, off} from './utils/events';
import getScrollWidth from './utils/getScrollWidth';
import clearSelection from './utils/clearSelection';
import stylesFactory from './styles';
import scrollTo from './modules/scrollTo';
import mouseWithoutWindow from './modules/mouse.without.window';
import generateStyle from './utils/generateStyle';
import generateID from './utils/generateID';
/**
 * This is min height for Scroll Bar.
 * If children content will be very big
 * Scroll Bar stay 20 pixels
 * */
const minHeightScrollBar = 20;
const REINIT_MS = 500;

const isFunction = fn => typeof fn === 'function';

class CustomScroll extends Component {
    constructor(props) {
        super(props);
        this.nextWrapperHeight = 0;
        this.nextHolderHeight = 0;
        this.scrollID = generateID();
        var scrollWidth = getScrollWidth();
        var _this = this;

        // If this is Safari / iPhone / iPad or other browser / device with scrollWidth === 0

        this.isZero = scrollWidth === 0;
        if (this.isZero) {
            scrollWidth = 17;
        }

        this.reset = function() {
            _this.removeListeners();
            _this.blockSelection(true);
        };

        this.styles = stylesFactory({
            isZero: this.isZero,
            originalScrollWidth: scrollWidth,
            scrollWidth:     typeof props.scrollWidth     !== 'undefined' ? props.scrollWidth     : '6px',
            scrollAreaColor: typeof props.scrollAreaColor !== 'undefined' ? props.scrollAreaColor : '#494949',
            scrollBarRadius: typeof props.scrollBarRadius !== 'undefined' ? props.scrollBarRadius : '6px',
            scrollBarColor:  typeof props.scrollBarColor  !== 'undefined' ? props.scrollBarColor  : '#aeaeae'
        });

        var className = typeof props.className !== 'undefined' ? props.className : 'react-customscroll';

        this.restScrollAfterResize = function() {
            _this.nextWrapperHeight = 0;
            _this.nextHolderHeight = 0;
        };
        /**
         * If mouse cursor gone outside window
         * Will be fire event 'mouseWithoutWindow'
         * And all listeners will be remove
         * and content in scroll block will be selectable
         * */
        on(document, ['mouseWithoutWindow'], this.reset);
        on(window,   ['resize'],             this.restScrollAfterResize);

        this.timer = {};
        /**
         * Reinitialize scroll bar every 500 ms
         * */
        this.interval = setInterval(this.reinit.bind(this), REINIT_MS);

        this.state = {
            width: `calc(100% + ${scrollWidth}px)`,
            selection: true,
            scrollAreaShow: false,
            animate: props.animate || true,
            classes: {
                'base': className,
                'holder': `${className}-holder`,
                'frame': `${className}-frame`,
                'area': `${className}-scrollbar-area`,
                'area-holder': `${className}-scrollbar-holder`,
                'scroll-bar': `${className}-scrollbar`,
            }
        };

        if (document && document.getElementById) {
            if (!document.getElementById(this.scrollID)) {
                generateStyle(`
#${this.scrollID}::-webkit-scrollbar {
  opacity: 0;
}
#${this.scrollID}::-webkit-scrollbar-track-piece {
  background-color: transparent;
}
                `, this.scrollID)
            }
        }
    }

    componentDidMount() {
        this.scrollBlock = this.refs.customScrollHolder;
        this.customScroll = this.refs.customScroll;
        this.customScrollHolder = this.refs.customScrollFrame;
    }

    componentWillUnmount() {
        if (document && document.getElementById) {
            let el = document.getElementById(this.scrollID);
            if (el) {
                el.parentNode.removeChild(el);
            }
        }
        clearInterval(this.interval);
        this.removeListeners();
        clearTimeout(this.timer);
    }

    getParams() {
        var wrapperHeight = this.customScroll.offsetHeight;
        var holderHeight = this.customScrollHolder.offsetHeight;
        var percentDiff = wrapperHeight / holderHeight;
        var height = wrapperHeight * percentDiff;

        return {
            wrapperHeight,
            holderHeight,
            percentDiff,
            height
        };
    }

    blockSelection(state) {
        if (!state) {
            clearSelection();
        }
        this.setState({selection: !!state});
    }

    onMouseDown(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        /**
         * If we clicked right mouse button we must skip this event
         * */
        var isRightMB;
        if ('which' in evt) {
            isRightMB = evt.which === 3;
        } else if ('button' in evt) {
            isRightMB = evt.button === 2;
        }
        if (isRightMB) {
            setTimeout(this.endScroll);
            return false;
        }

        var elem = this.scrollBlock;
        var startPoint = evt.touches ? evt.touches[0].pageY : evt.pageY;

        var scrollTopOffset = elem.scrollTop;
        this.blockSelection(false);
        var _this = this;

        this.scrollRun = function(e) {
            e.stopPropagation();
            e.preventDefault();
            let {holderHeight, wrapperHeight} = _this.getParams();
            var diff = holderHeight / wrapperHeight;
            var pageY = e.touches ? e.touches[0].pageY : e.pageY;
            scrollTo(elem, ((pageY - startPoint) * diff)  + scrollTopOffset);
        };

        this.endScroll = function() {
            _this.removeListeners();
            _this.blockSelection(true);
        };

        on(document, ['mouseup', 'touchend'], this.endScroll);
        on(document, ['mousemove', 'touchmove'], this.scrollRun);
    }

    removeListeners() {
        off(document, ['mouseWithoutWindow'], this.reset);
        off(window,   ['resize'], this.restScrollAfterResize);
        off(document, ['mouseup', 'touchend'], this.endScroll);
        off(document, ['mousemove', 'touchmove'], this.scrollRun);
    }

    reinit() {
        let {wrapperHeight, holderHeight} = this.getParams();

        if ((wrapperHeight !== this.nextWrapperHeight) ||
            (holderHeight  !== this.nextHolderHeight)) {

            this.setState({
                scrollAreaShow: holderHeight > wrapperHeight
            });
        }

        this.nextWrapperHeight = wrapperHeight;
        this.nextHolderHeight  = holderHeight;
    }

    jump(e) {
        var y = e.touches ? e.touches[0].pageY : e.pageY;
        var scrollBar = this.refs.scrollBar;
        var scrollPosition  = this.scrollBlock.scrollTop;
        let {wrapperHeight} = this.getParams();
        var topOffset = this.scrollBlock.getBoundingClientRect().top;

        if (y < (topOffset + scrollBar.offsetTop) ||
            y > (topOffset + scrollBar.offsetTop + scrollBar.offsetHeight)) {
            var offset  = topOffset + scrollBar.offsetTop <= y ? 1 : -1;
            var scrollY = (scrollPosition + (wrapperHeight * offset));
            scrollTo(this.scrollBlock, scrollY);
        }
    }

    getScrollArea() {
        return <div ref="scroll-area" style={this.styles.scrollArea} onClick={this.jump.bind(this)} className={this.state.classes.area}>
            <div ref="scroll-area-holder" style={this.styles.scrollAreaFrame} className={this.state.classes['area-holder']}>
                <div ref="scrollBar" style={Object.assign({}, this.styles.scrollBar, this.getScrollBarStyles.call(this))} onMouseDown={this.onMouseDown.bind(this)} onTouchStart={this.onMouseDown.bind(this)} className={this.state.classes['scroll-bar']} />
            </div>
        </div>;
    }

    scroll() {
        this.setState({
            scrollTop: this.scrollBlock.scrollTop
        });
    }

    getScrollBarStyles() {
        let {holderHeight, percentDiff, height} = this.getParams();
        var scrollTop = this.state.scrollTop || this.scrollBlock.scrollTop;

        var newPercentDiff = height < minHeightScrollBar ?
            percentDiff - ((minHeightScrollBar - height) / holderHeight) :
            percentDiff;

        var scrollBarHeight = height < minHeightScrollBar ? minHeightScrollBar : height;

        return {
            top: scrollTop * newPercentDiff,
            height: scrollBarHeight
        };
    }

    componentWillReceiveProps(props) {
        var offsetY = parseInt(props.scrollTo);

        if (typeof offsetY !== 'undefined' && !isNaN(offsetY)) {
            scrollTo.call(this, this.scrollBlock, offsetY, this.state.animate);
        }
    }

    setY(value) {
        scrollTo.call(this, this.scrollBlock, value, this.state.animate);
    }

    render() {
        var ctmScroll      = !this.state.selection     ? Object.assign({}, this.styles.ctmScroll,      this.styles.noselect)        : this.styles.ctmScroll,
            ctmScrollFrame = this.state.scrollAreaShow ? Object.assign({}, this.styles.ctmScrollFrame, this.styles.ctmScrollActive) : this.styles.ctmScrollFrame;
        
        return (
            <div ref="customScroll" style={ctmScroll} className={this.state.classes.base}>
                <div ref="customScrollHolder" style={Object.assign({}, {width: this.state.width}, this.styles.ctmScrollHolder)} onScroll={this.scroll.bind(this)} className={this.state.classes.holder} id={this.scrollID}>
                    <div ref="customScrollFrame" style={ctmScrollFrame} className={this.state.classes.frame}>
                        {isFunction(this.props.children) ? this.props.children(this.scrollBlock && this.scrollBlock.scrollTop ? this.scrollBlock.scrollTop : 0) : this.props.children}
                    </div>
                    {this.state.scrollAreaShow ? this.getScrollArea.call(this) : null}
                </div>
            </div>
        );
    }
}

module.exports = CustomScroll;