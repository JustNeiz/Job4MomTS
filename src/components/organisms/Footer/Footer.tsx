import "./Footer.scss";
import NavMenuFooter from "../../molecules/NavMenuFooter/NavMenuFooter.tsx";
import ContactUsFooter from "../../molecules/ContactUsFooter/ContactUsFooter.tsx";
import Copyrights from "../../atoms/Copyrights/Copyrights.tsx";

const Footer = () => {
  return (
    <div className={"footer"}>
      <NavMenuFooter />
      <ContactUsFooter />
      <Copyrights />
    </div>
  );
};

export default Footer;
