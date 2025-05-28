import { ReactNode } from "react";

export interface Props {
  children: (offset: number) => ReactNode;
  rtl?: boolean;
  scrollAreaColor?: string;
  scrollBarColor?: string;
  scrollBarRadius?: string;
  scrollSync?: (offset: number) => unknown;
  scrollTo?: number;
  scrollWidth?: string;
  virtualized?: {
    height: number;
    scrollHeight: number;
  };
}
