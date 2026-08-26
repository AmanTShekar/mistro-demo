import type * as React from "react";

declare module "react" {
  export interface ViewTransitionProps {
    children?: React.ReactNode;
    name?: string;
    share?: string;
    default?: string | Record<string, string>;
    enter?: string | Record<string, string>;
    exit?: string | Record<string, string>;
    update?: string | Record<string, string>;
    onEnter?: () => void;
    onExit?: () => void;
  }
  export const ViewTransition: React.FC<ViewTransitionProps>;
}
