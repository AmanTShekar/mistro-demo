import type { ReactNode } from "react";
import { ViewTransition } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "page-in",
      }}
      exit={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "page-out",
      }}
    >
      {children}
    </ViewTransition>
  );
}
