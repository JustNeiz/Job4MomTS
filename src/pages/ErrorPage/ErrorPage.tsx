import "./ErrorPage.scss";
import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle.tsx";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className={"errorPage"}>
      <div className={"errorPage__text"}>
        <SectionTitle>HERE IS A MISTAKE...</SectionTitle>
        <NavLink to={"main"} className={"errorPage__text--link"}>
          Go to the main page
        </NavLink>
      </div>
      <img src={"src/assets/404Woman.png"} alt="404Woman" />
    </div>
  );
};

export default ErrorPage;
