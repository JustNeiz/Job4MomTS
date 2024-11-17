import "./SearchMenu.scss";
import SearchForm from "../../molecules/SearchForm/SearchForm.tsx";
import WhiteButtonsList from "../../molecules/WhiteButtonsList/WhiteButtonsList.tsx";
const SearchMenu = () => {
  const jobSearchQueries = [
    "job openings in New York",
    "remote jobs",
    "jobs for students",
    "flexible work schedule jobs",
    "IT job search",
    "marketing jobs",
    "entry-level job vacancies",
    "bank job openings",
    "jobs for women",
    "social media jobs",
    "high salary job vacancies",
  ];
  return (
    <div className={"searchMenu"}>
      <SearchForm />
      <div className={"searchMenu__popularRequests"}>
        <span>Popular requests: </span>
        <WhiteButtonsList array={jobSearchQueries} />
      </div>
    </div>
  );
};

export default SearchMenu;
