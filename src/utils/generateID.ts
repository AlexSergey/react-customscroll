export const generateID = (): string => (
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`
);
