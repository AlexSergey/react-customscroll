import './styles/customscroll.scss';

import React, {Component} from 'react';
import {on, off} from './utils/events';
import getScrollWidth from './utils/getScrollWidth';
import clearSelection from './utils/clearSelection';

import scrollTo from './modules/scrollTo';
import mouseWithoutWindow from './modules/mouse.without.window';
/**
 * This is min height for Scroll Bar.
 * If children content will be very big
 * Scroll Bar stay 20 pixels
 * */
const minHeightScrollBar = 20;
const REINIT_MS = 500;

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

class CustomScroll extends Component {
    constructor(props) {
        super(props);

        this.nextWrapperHeight = 0;
        this.nextHolderHeight = 0;

        var scrollWidth = getScrollWidth();
        var _this = this;

        this.reset = function() {
            _this.removeListeners();
            _this.blockSelection(true);
        };

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
            width: !isMobile ? `calc(100% + ${scrollWidth}px)` : '100%',
            selection: true,
            scrollAreaShow: false,
            animate: props.animate || true
        };
    }

    componentDidMount() {
        this.scrollBlock = this.refs.customScrollHolder;
        this.customScroll = this.refs.customScroll;
        this.customScrollHolder = this.refs.customScrollFrame;
    }

    componentWillUnmount() {
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
        return <div ref="scroll-area" className={"ctm-scroll-area"} onClick={this.jump.bind(this)}>
            <div ref="scroll-area-holder" className="ctm-scroll-area-frame">
                <div ref="scrollBar" className="ctm-scroll-bar" style={this.getScrollBarStyles.call(this)} onMouseDown={this.onMouseDown.bind(this)} onTouchStart={this.onMouseDown.bind(this)}/>
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
        return (
            <div ref="customScroll" className={
                (this.state.scrollAreaShow ? 'ctm-scroll-bar-active ' : '')    +
                (this.state.selection ? 'ctm-scroll' : 'ctm-scroll noselect') +
                (isMobile ? ' ctm-scroll-mobile' : '')}>
                <div ref="customScrollHolder" className="ctm-scroll-holder" style={{width: this.state.width}} onScroll={this.scroll.bind(this)}>
                    <div ref="customScrollFrame" className="ctm-scroll-frame">
                        {this.props.children}
                    </div>
                    {this.state.scrollAreaShow ? this.getScrollArea.call(this) : null}
                </div>
            </div>
        );
    }
}

module.exports = CustomScroll;