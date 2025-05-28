/*
 * Clear selection range on content in the scroll block
 * */
import { isClient } from "./is";

export const clearSelection = (): void => {
  if (isClient()) {
    (window.getSelection() as { removeAllRanges: () => void }).removeAllRanges();
  }
};
