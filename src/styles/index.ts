import { Styles } from "../types/styles";

interface Props {
  isZero: boolean;
  originalScrollWidth: number;
  scrollAreaColor: string;
  scrollBarColor: string;
  scrollBarRadius: string;
  scrollWidth: string;
  virtualized: boolean;
}

export const stylesFactory = (props: Props, rtl?: boolean): Styles => ({
  ctmScroll: {
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },
  ctmScrollActive: Object.assign(
    {},
    rtl
      ? {
          paddingLeft: props.scrollWidth,
        }
      : {
          paddingRight: props.scrollWidth,
        },
  ),
  ctmScrollFrame: Object.assign(
    {},
    props.virtualized ? { height: "100%", width: "100%" } : {},
    props.isZero
      ? {
          width: `calc(100% - ${props.originalScrollWidth}px)`,
        }
      : {},
  ),
  ctmScrollHolder: {
    height: "100%",
    overflowY: "scroll",
  },
  noselect: {
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
  },
  scrollArea: Object.assign(
    {
      background: props.scrollAreaColor,
      height: "100%",
      padding: "1px",
      position: "absolute",
      width: props.scrollWidth,
      zIndex: "10",
    },
    rtl
      ? {
          left: "0",
          top: "0",
        }
      : {
          right: "0",
          top: "0",
        },
  ),
  scrollAreaFrame: {
    height: "100%",
    position: "relative",
  },
  scrollBar: Object.assign({
    background: props.scrollBarColor,
    borderRadius: props.scrollBarRadius,
    cursor: "pointer",
    position: "absolute",
    top: "0",
    width: "100%",
  }),
});
