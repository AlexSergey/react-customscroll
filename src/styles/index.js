export default function(colors) {
    return {
        scrollArea: {
            background: colors.scrollAreaColor,
            width: colors.scrollWidth,
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
            borderRadius: colors.scrollBarRadius,
            position: 'absolute',
            top: '0',
            width: '100%',
            background: colors.scrollBarColor,
            cursor: 'pointer'
        },
        ctmScroll: {
            overflow: 'hidden',
            height: '100%',
            position: 'relative'
        },
        ctmScrollActive: {
            paddingRight: colors.scrollWidth
        },
        ctmScrollFrame: {
            overflow: 'hidden'
        },
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