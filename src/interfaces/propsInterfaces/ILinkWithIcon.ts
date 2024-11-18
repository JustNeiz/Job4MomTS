import { ReactNode } from "react";

export interface ILinkWithIcon {
  icon: string | ReactNode;
  href: string;
  className?: string;
  children: string;
}
