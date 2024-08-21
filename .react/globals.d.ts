import { DetailedHTMLProps, HTMLAttributes } from "react";

export {};

declare global {
  const logger: typeof import("./logger")["logger"];

  namespace JSX {
    interface IntrinsicElements {
      div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      h1: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    }
  }
}
