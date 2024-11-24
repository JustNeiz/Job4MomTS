import "./WhiteBorderedButton.scss";
import { IWhiteBorderedButtonProps } from "../../../interfaces/propsInterfaces/IWhiteBorderedButton.ts";
import React from "react";

const WhiteBorderedButton: React.FC<IWhiteBorderedButtonProps> = ({
  children,
  className = "",
  rightSection,
  leftSection,
  onClick,
}) => {
  return (
    <div className={`whiteBorderedButton ${className} `} onClick={onClick}>
      {leftSection && leftSection}
      <span>{children}</span>
      {rightSection && rightSection}
    </div>
  );
};

export default WhiteBorderedButton;
