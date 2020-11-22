import { ReactNode } from 'react';

export type Props = {
  scrollTo?: number;
  scrollSync?: (offset: number) => unknown;
  virtualized?: {
    height: number;
    scrollHeight: number;
  };
  scrollWidth?: string;
  scrollAreaColor?: string;
  scrollBarRadius?: string;
  scrollBarColor?: string;
  rtl?: boolean;
  children: (offset: number) => unknown | ReactNode;
};
