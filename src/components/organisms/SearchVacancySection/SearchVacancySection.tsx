import "./SearchVacancySection.scss";
import SearchSectionForm from "../../atoms/SearchSectionForm/SearchSectionForm.tsx";
import NetworkSignUp from "../../molecules/NetworkSignUp/NetworkSignUp.tsx";
const SearchVacancySection = () => {
  return (
    <div className={"searchVacancySection"}>
      <h5 className={"searchVacancySection__title"}>Email</h5>
      <SearchSectionForm />
      <NetworkSignUp />
    </div>
  );
};

export default SearchVacancySection;
