import "./FooterCard.scss";
import { NavLink } from "react-router-dom";
import { IFooterCard } from "../../../interfaces/propsInterfaces/IFooterCard.ts";
import React from "react";
const FooterCard: React.FC<IFooterCard> = ({ label, cardContentArray }) => {
  return (
    <div className={"footerCard"}>
      <h4 className={"footerCard__title"}>{label}</h4>
      {cardContentArray.map((item) => (
        <NavLink to={item.href} className={"footerCard__link"}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default FooterCard;
