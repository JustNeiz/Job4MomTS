import "./NavMenuHeader.scss";
import { Link } from "react-router-dom";
const NavMenuHeader = () => {
  const menuItems = [
    { label: "Vacancies", href: "#vacancies" },
    { label: "About Us", href: "#about" },
    { label: "Get Help", href: "#help" },
  ];
  return (
    <div className={"navMenuHeader"}>
      {menuItems.map((item) => (
        <Link to={item.href} className={"navMenuHeader__link"}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavMenuHeader;
