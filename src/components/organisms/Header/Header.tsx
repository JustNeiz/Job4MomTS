import "./Header.scss";
import Logo from "../../atoms/Logo/Logo.tsx";
import NavMenuHeader from "../../molecules/NavMenuHeader/NavMenuHeader.tsx";
import UserMenuHeader from "../../molecules/UserMenuHeader/UserMenuHeader.tsx";

const Header = () => {
  return (
    <header className={"header"}>
      <Logo />
      <NavMenuHeader />
      <UserMenuHeader />
    </header>
  );
};

export default Header;
