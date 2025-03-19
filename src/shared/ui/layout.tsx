import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto p-14">{children}</div>;
};
