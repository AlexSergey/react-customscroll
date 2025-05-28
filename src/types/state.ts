import { Styles } from "./styles";

export interface State {
  animate: boolean;
  classes: {
    area: string;
    "area-holder": string;
    base: string;
    frame: string;
    holder: string;
    "scroll-bar": string;
  };
  scrollAreaShow: boolean;
  scrollTop: number;
  selection: boolean;
  styles: Styles;
  virtualState: null | { height: number; top: number };
  width: string;
}
