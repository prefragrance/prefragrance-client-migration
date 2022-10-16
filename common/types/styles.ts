export interface IFlex {
  wrap?: "flex-wrap" | "flex-nowrap";
  // gap-2 : 0.5rem, gap-4 : 1rem, gap-6: 1.5rem, gap-8: 2rem
  gap?: "gap-2" | "gap-4" | "gap-6" | "gap-8";
  justifyContent?:
    | "justify-start"
    | "justify-end"
    | "justify-center"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
  alignItems?:
    | "items-start"
    | "items-end"
    | "items-center"
    | "items-baseline"
    | "items-stretch";
  children?: React.ReactNode;
}
