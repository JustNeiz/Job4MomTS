import { Link } from "react-router-dom";
import "./LinkWithIcon.scss";

const LinkWithIcon = ({ icon, href, className, children }) => {
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
