/*!
 * banner:
 * react-customscroll: 4.2.0
 * Aleksandrov Sergey <gooddev.sergey@gmail.com> (https://github.com/AlexSergey/react-customscroll)
 * This is little custom scroll React component.
 * MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.CustomScroll=e(require("react")):t.CustomScroll=e(t.React)}(this,function(t){return function(t){var e={};function s(o){if(e[o])return e[o].exports;var l=e[o]={i:o,l:!1,exports:{}};return t[o].call(l.exports,l,l.exports,s),l.l=!0,l.exports}return s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)s.d(o,l,function(e){return t[e]}.bind(null,l));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s(s.s=0)}([function(t,e,s){"use strict";s.r(e),function(t){var o=s(2),l=s.n(o),r=s(3),i=s(4),c=s(5),n=s(6),a=s(7),h=(s(8),s(9)),u=s(10),d=s(11);const p=20,f=250;class m extends o.Component{constructor(t){super(t),["scroll-area","scroll-area-holder","scrollBar","customScroll","customScrollHolder","customScrollFrame"].forEach(t=>{this[t+"Ref"]=Object(o.createRef)()}),this.nextWrapperHeight=0,this.nextHolderHeight=0,this.scrollID=Object(u.a)(),m.scrollWidth||(m.scrollWidth=Object(i.a)());let e=m.scrollWidth,s=this;this.isZero=0===e,this.isVirtualized=Object(d.d)(t.virtualized),this.isZero&&(e=17),this.reset=function(){s.removeListeners(),s.blockSelection(!0)};let l=Object(d.b)(t.className)?t.className:"react-customscroll";this.restScrollAfterResize=function(){s.nextWrapperHeight=0,s.nextHolderHeight=0},Object(r.b)(document,["mouseWithoutWindow"],this.reset),Object(r.b)(window,["resize"],this.restScrollAfterResize),this.timer={},this.interval=setInterval(this.reinit.bind(this),f),this.state={width:"calc(100% + "+e+"px)",selection:!0,scrollAreaShow:!1,animate:t.animate||!0,classes:{base:l,holder:l+"-holder",frame:l+"-frame",area:l+"-scrollbar-area","area-holder":l+"-scrollbar-holder","scroll-bar":l+"-scrollbar"},virtualState:this.isVirtualized?this.getScrollBarStyles(t.scrollTo||0):null,styles:{}},Object(d.a)()&&(document.getElementById(this.scrollID)||Object(h.a)("#"+this.scrollID+"::-webkit-scrollbar { opacity: 0 }\n#"+this.scrollID+"::-webkit-scrollbar-track-piece { background-color: transparent }",this.scrollID))}applyStyles(){let e=m.scrollWidth,s=!1;if(Object(d.a)()){s="rtl"===t.getComputedStyle(this.customScrollHolder).direction}this.setState(Object.assign(this.state,{styles:Object(n.a)({virtualized:this.isVirtualized,isZero:this.isZero,originalScrollWidth:e,scrollWidth:Object(d.b)(this.props.scrollWidth)?this.props.scrollWidth:"6px",scrollAreaColor:Object(d.b)(this.props.scrollAreaColor)?this.props.scrollAreaColor:"#494949",scrollBarRadius:Object(d.b)(this.props.scrollBarRadius)?this.props.scrollBarRadius:"6px",scrollBarColor:Object(d.b)(this.props.scrollBarColor)?this.props.scrollBarColor:"#aeaeae"},s)}))}componentDidMount(){this.scrollBlock=this.customScrollHolderRef.current,this.customScroll=this.customScrollRef.current,this.customScrollHolder=this.customScrollFrameRef.current,this.applyStyles()}componentWillUnmount(){if(Object(d.a)()){let t=document.getElementById(this.scrollID);t&&t.parentNode.removeChild(t)}clearInterval(this.interval),this.removeListeners(),clearTimeout(this.timer)}getParams(){let t=0,e=0,s=0,o=0,l=this["scroll-areaRef"].current,r=window&&l?parseFloat(window.getComputedStyle(l,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(l,null).getPropertyValue("padding-bottom")):0;return this.isVirtualized?(t=this.props.virtualized.height||0,e=this.props.virtualized.scrollHeight||0):(t=this.customScroll&&this.customScroll.offsetHeight,e=this.customScroll&&this.customScrollHolder.offsetHeight),0===e?(o=0,s=0):o=t*(s=(t-r)/e),{wrapperHeight:Math.ceil(t),holderHeight:e,percentDiff:s,height:o}}blockSelection(t){t||Object(c.a)(),this.setState({selection:!!t})}onMouseDown(t){let e;if(t.stopPropagation(),t.preventDefault(),"which"in t?e=3===t.which:"button"in t&&(e=2===t.button),e)return setTimeout(this.endScroll),!1;let s=this.scrollBlock,o=t.touches?t.touches[0].pageY:t.pageY,l=this.isVirtualized?this.props.scrollTo||0:s.scrollTop;this.blockSelection(!1);let i=this;this.scrollRun=function(t){t.stopPropagation(),t.preventDefault();let{holderHeight:e,wrapperHeight:r}=i.getParams(),c=e/r,n=t.touches?t.touches[0].pageY:t.pageY;if(i.isVirtualized){let t=(n-o)*c+l;t=e-r<=t?e-r:t,Object(d.c)(i.props.scrollSync)&&i.props.scrollSync(t)}else Object(a.a)(s,(n-o)*c+l)},this.endScroll=function(){i.removeListeners(),i.blockSelection(!0)},Object(r.b)(document,["mouseup","touchend"],this.endScroll),Object(r.b)(document,["mousemove","touchmove"],this.scrollRun)}removeListeners(){Object(r.a)(document,["mouseWithoutWindow"],this.reset),Object(r.a)(window,["resize"],this.restScrollAfterResize),Object(r.a)(document,["mouseup","touchend"],this.endScroll),Object(r.a)(document,["mousemove","touchmove"],this.scrollRun)}reinit(){let{wrapperHeight:t,holderHeight:e}=this.getParams();if(t!==this.nextWrapperHeight||e!==this.nextHolderHeight)if(this.isVirtualized){let s=this.props.scrollTo||0,o=this.getScrollBarStyles(s);this.setState({virtualState:o,scrollAreaShow:e>t})}else this.setState({scrollAreaShow:e>t});this.nextWrapperHeight=t,this.nextHolderHeight=e}jump(t){let e=t.touches?t.touches[0].pageY:t.pageY,s=this.scrollBarRef.current,o=this.scrollBlock.scrollTop,{wrapperHeight:l}=this.getParams(),r=this.scrollBlock.getBoundingClientRect().top;if(this.isVirtualized&&(s={},o=this.props.scrollTo||0,s.offsetTop=this.state.virtualState.top,s.offsetHeight=this.state.virtualState.height),e<r+s.offsetTop||e>r+s.offsetTop+s.offsetHeight){let t=o+l*(r+s.offsetTop<=e?1:-1);this.isVirtualized?Object(d.c)(this.props.scrollSync)&&this.props.scrollSync(t):Object(a.a)(this.scrollBlock,t)}}getScrollArea(){return l.a.createElement("div",{ref:this["scroll-areaRef"],style:this.state.styles.scrollArea,onClick:this.jump.bind(this),className:this.state.classes.area},l.a.createElement("div",{ref:this["scroll-area-holderRef"],style:this.state.styles.scrollAreaFrame,className:this.state.classes["area-holder"]},l.a.createElement("div",{ref:this.scrollBarRef,style:Object.assign({},this.state.styles.scrollBar,this.isVirtualized?this.state.virtualState:this.getScrollBarStyles.call(this)),onMouseDown:this.onMouseDown.bind(this),onTouchStart:this.onMouseDown.bind(this),className:this.state.classes["scroll-bar"]})))}scroll(){this.setState({scrollTop:this.scrollBlock.scrollTop})}getScrollBarStyles(t){let{holderHeight:e,percentDiff:s,height:o}=this.getParams();return 0===e&&0===s&&0===o?{top:0,height:0}:{top:(this.isVirtualized?t:this.state.scrollTop||this.scrollBlock.scrollTop)*(o<p?s-(p-o)/e:s),height:o<p?p:o}}componentWillReceiveProps(t){let e=parseInt(t.scrollTo);this.isVirtualized&&(e=e||0,this.setState({virtualState:this.getScrollBarStyles(e)})),Object(d.b)(e)&&!isNaN(e)&&(this.isVirtualized||a.a.call(this,this.scrollBlock,e,this.state.animate))}setY(t){a.a.call(this,this.scrollBlock,t,this.state.animate)}render(){let t=this.state.selection?this.state.styles.ctmScroll:Object.assign({},this.state.styles.ctmScroll,this.state.styles.noselect),e=this.state.scrollAreaShow?Object.assign({},this.state.styles.ctmScrollFrame,this.state.styles.ctmScrollActive):this.state.styles.ctmScrollFrame;return l.a.createElement("div",{ref:this.customScrollRef,style:t,className:this.state.classes.base},l.a.createElement("div",{ref:this.customScrollHolderRef,style:Object.assign({},{width:this.state.width},this.state.styles.ctmScrollHolder),onScroll:this.scroll.bind(this),className:this.state.classes.holder,id:this.scrollID},l.a.createElement("div",{ref:this.customScrollFrameRef,style:Object.assign({},e,this.isZero?{width:"100%"}:{}),className:this.state.classes.frame},Object(d.c)(this.props.children)?this.props.children(this.scrollBlock&&this.scrollBlock.scrollTop?this.scrollBlock.scrollTop:0):this.props.children),this.state.scrollAreaShow?this.getScrollArea.call(this):null))}}e.default=m}.call(this,s(1))},function(t,e){var s;s=function(){return this}();try{s=s||new Function("return this")()}catch(t){"object"==typeof window&&(s=window)}t.exports=s},function(e,s){e.exports=t},function(t,e,s){"use strict";function o(t,e,s){e.forEach(function(e){t.addEventListener(e,s)})}function l(t,e,s){e.forEach(function(e){t.removeEventListener(e,s)})}s.d(e,"b",function(){return o}),s.d(e,"a",function(){return l})},function(t,e,s){"use strict";function o(){let t=document.createElement("p");t.style.width="100%",t.style.height="200px";let e=document.createElement("div");e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.visibility="hidden",e.style.width="200px",e.style.height="150px",e.style.overflow="hidden",e.appendChild(t),document.body.appendChild(e);let s=t.offsetWidth;e.style.overflow="scroll";let o=t.offsetWidth;return s===o&&(o=e.clientWidth),document.body.removeChild(e),s-o}s.d(e,"a",function(){return o})},function(t,e,s){"use strict";function o(){document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges()}s.d(e,"a",function(){return o})},function(t,e,s){"use strict";e.a=function(t,e){return{scrollArea:Object.assign({background:t.scrollAreaColor,width:t.scrollWidth,padding:"1px",zIndex:"10",position:"absolute",height:"100%"},e?{top:"0",left:"0"}:{top:"0",right:"0"}),scrollAreaFrame:{height:"100%",position:"relative"},scrollBar:Object.assign({borderRadius:t.scrollBarRadius,position:"absolute",top:"0",width:"100%",background:t.scrollBarColor,cursor:"pointer"}),ctmScroll:{overflow:"hidden",height:"100%",position:"relative"},ctmScrollActive:Object.assign({},e?{paddingLeft:t.scrollWidth}:{paddingRight:t.scrollWidth}),ctmScrollFrame:Object.assign({},t.virtualized?{height:"100%",width:"100%"}:{overflow:"hidden"},t.isZero?{width:"calc(100% - "+t.originalScrollWidth+"px)"}:{}),noselect:{WebkitTouchCallout:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},ctmScrollHolder:{overflowY:"scroll",height:"100%"}}}},function(t,e,s){"use strict";e.a=function(t,e,s){s?function t(e,s,o){if(o<=0)return!1;let l=(s-e.scrollTop)/o*10;setTimeout(function(){e.scrollTop=e.scrollTop+l,e.scrollTop!==s&&t.call(this,e,s,o-10)}.bind(this),10)}.call(this,t,e,500):t.scrollTop=e}},function(t,e,s){"use strict";(function(){let t;return{getInstance:function(){return t||(t=function(){function t(){let t=document.createEvent("Event");t.initEvent("mouseWithoutWindow",!0,!0),document.dispatchEvent(t)}document.addEventListener("mouseup",function(e){let s=window,o=document,l=o.documentElement,r=o.getElementsByTagName("body")[0],i=s.innerWidth||l.clientWidth||r.clientWidth,c=s.innerHeight||l.clientHeight||r.clientHeight;(e.clientX>=i||e.clientX<0||e.clientY>=c||e.clientY<0)&&t()}),window.addEventListener("blur",function(){t()})}()),t}}})().getInstance()},function(t,e,s){"use strict";function o(t,e){let s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.setAttribute("id",e),o.type="text/css",o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t)),s.appendChild(o)}s.d(e,"a",function(){return o})},function(t,e,s){"use strict";function o(){return"_"+Math.random().toString(36).substr(2,9)}s.d(e,"a",function(){return o})},function(t,e,s){"use strict";s.d(e,"d",function(){return i}),s.d(e,"c",function(){return o}),s.d(e,"b",function(){return l}),s.d(e,"a",function(){return r});const o=t=>"function"==typeof t,l=t=>void 0!==t,r=()=>document&&document.getElementById,i=t=>"object"==typeof t}])});