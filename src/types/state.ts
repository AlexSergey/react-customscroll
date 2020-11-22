import { Styles } from './styles';

export type State = {
  scrollTop: number;
  width: string;
  selection: boolean;
  scrollAreaShow: boolean;
  animate: boolean;
  classes: {
    base: string;
    holder: string;
    frame: string;
    area: string;
    'area-holder': string;
    'scroll-bar': string;
  };
  virtualState: { top: number; height: number } | null;
  styles: Styles;
};
