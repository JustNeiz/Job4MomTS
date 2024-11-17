import "./MainPage.scss";
import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle.tsx";
import SearchMenu from "../../components/organisms/SearchMenu/SearchMenu.tsx";
import JobsBySection from "../../components/organisms/JobsBySection/JobsBySection.tsx";
import Benefits from "../../components/organisms/Benefits/Benefits.tsx";
const MainPage = () => {
  return (
    <div className={"mainPage"}>
      <SectionTitle>
        YOU ARE THE MOM AT HOME?
        <br />
        FIND AN OPPORTUNITY FOR YOURSELF
      </SectionTitle>
      <SearchMenu />
      <JobsBySection />
      <Benefits />
    </div>
  );
};

export default MainPage;
