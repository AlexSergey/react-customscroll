export default function(props) {
    return {
        scrollArea: {
            background: props.scrollAreaColor,
            width: props.scrollWidth,
            padding: '1px',
            zIndex: '10',
            top: '0',
            right: '0',
            position: 'absolute',
            height: '100%'
        },
        scrollAreaFrame: {
            height: '100%',
            position: 'relative'
        },
        scrollBar: {
            borderRadius: props.scrollBarRadius,
            position: 'absolute',
            top: '0',
            width: '100%',
            background: props.scrollBarColor,
            cursor: 'pointer'
        },
        ctmScroll: {
            overflow: 'hidden',
            height: '100%',
            position: 'relative'
        },
        ctmScrollActive: {
            paddingRight: props.scrollWidth
        },
        ctmScrollFrame: Object.assign({}, {
            overflow: 'hidden'
        }, props.isZero ? {
            width: `calc(100% - ${props.originalScrollWidth}px)`
        } : {}),
        noselect: {
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
        },
        ctmScrollHolder: {
            overflowY: 'scroll',
            height: '100%'
        }
    };
}