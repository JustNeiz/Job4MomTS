import React from "react";

export interface IWhiteBorderedButtonProps {
  children: string;
  className?: string;
  rightSection?: string | React.ReactNode;
  leftSection?: string | React.ReactNode;
  href?: string;
  onClick?: () => void;
}
