import { Link } from "react-router-dom";
import "./LinkWithIcon.scss";
import { ILinkWithIcon } from "../../../interfaces/propsInterfaces/ILinkWithIcon.ts";
import React from "react";

const LinkWithIcon: React.FC<ILinkWithIcon> = ({
  icon,
  href,
  className,
  children,
}) => {
  return (
    <div className={`linkWithIcon ${className}`}>
      <Link to={href}>{children}</Link>
      {typeof icon === "string" ? (
        <span className="linkWithIcon__icon">{icon}</span>
      ) : (
        icon
      )}
    </div>
  );
};

export default LinkWithIcon;
