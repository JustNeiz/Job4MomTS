import { Link } from "react-router-dom";
import "./Logo.scss";
import { ILogo } from "../../../interfaces/propsInterfaces/ILogo.ts";
import React from "react";
const Logo: React.FC<ILogo> = ({ className }) => {
  return (
    <Link to="/" className={`logo ${className}`}>
      MOM PROJECT
    </Link>
  );
};

export default Logo;
