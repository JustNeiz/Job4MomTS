import { Link } from "react-router-dom";
import "./Logo.scss";
const Logo = ({ color = "black" }) => {
  return (
    <Link to="/" className="logo" style={{ color: color }}>
      MOM PROJECT
    </Link>
  );
};

export default Logo;
