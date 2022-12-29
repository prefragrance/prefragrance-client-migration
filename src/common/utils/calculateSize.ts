export const calculateSize = (size?: number): string => {
  return size ? `${size / 16}rem` : "1rem";
};
