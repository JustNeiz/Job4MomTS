import "./LoginPage.scss";
import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle.tsx";
import SearchVacancySection from "../../components/organisms/SearchVacancySection/SearchVacancySection.tsx";
const LoginPage = () => {
  return (
    <div className={"loginPage"}>
      <SectionTitle>LOG IN</SectionTitle>
      <h5 className={"loginPage__subtitle"}>Please send your details</h5>
      <SearchVacancySection />
    </div>
  );
};

export default LoginPage;
