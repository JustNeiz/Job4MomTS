import "./FooterCard.scss";
import { NavLink } from "react-router-dom";
const FooterCard = ({ label, cardContentArray }) => {
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
