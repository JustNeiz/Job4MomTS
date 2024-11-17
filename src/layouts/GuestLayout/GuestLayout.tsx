import "./GuestLayout.scss";
import Header from "../../components/organisms/Header/Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "../../components/organisms/Footer/Footer.tsx";
import CookiesModal from "../../components/molecules/CookiesModal/CookiesModal.tsx";

const GuestLayout = () => {
  return (
    <div className={"guestLayout"}>
      <Header />
      <Outlet />
      <Footer />
      <CookiesModal />
    </div>
  );
};

export default GuestLayout;
