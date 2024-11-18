import "./NavMenuFooter.scss";
import Logo from "../../atoms/Logo/Logo.tsx";
import FooterCard from "../FooterCard/FooterCard.tsx";

const NavMenuFooter = () => {
  const jobs = [
    { label: "View Jobs", href: "/" },
    { label: "How can we Help", href: "/" },
  ];
  const forEmployers = [{ label: "Post a Job", href: "/" }];
  return (
    <div className={"navMenuHeader"}>
      <Logo className={"navMenuHeader__logo"} />
      <FooterCard label={"JOBS FOR MOM"} cardContentArray={jobs} />
      <FooterCard label={"FOR EMPLOYERS"} cardContentArray={forEmployers} />
    </div>
  );
};

export default NavMenuFooter;
