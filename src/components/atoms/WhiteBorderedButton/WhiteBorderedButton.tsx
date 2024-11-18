import "./WhiteBorderedButton.scss";
import { useNavigate } from "react-router-dom";
import { IWhiteBorderedButtonProps } from "../../../interfaces/propsInterfaces/IWhiteBorderedButton.ts";
import React from "react";

const WhiteBorderedButton: React.FC<IWhiteBorderedButtonProps> = ({
  children,
  className,
  rightSection,
  leftSection,
  href,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`whiteBorderedButton ${className} `}
      onClick={() => href && navigate(href)}
    >
      {leftSection && leftSection}
      <span>{children}</span>
      {rightSection && rightSection}
    </div>
  );
};

export default WhiteBorderedButton;
