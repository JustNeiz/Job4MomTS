import "./BlackButton.scss";
import { IBlackButton } from "../../../interfaces/propsInterfaces/IBlackButton.ts";
import React from "react";
const BlackButton: React.FC<IBlackButton> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div className={`blackButton ${className}`} onClick={onClick}>
      <span>{children}</span>
    </div>
  );
};

export default BlackButton;
