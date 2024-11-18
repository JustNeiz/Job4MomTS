import "./SearchResultsPage.scss";
import NoResultsFound from "../../components/molecules/NoResultsFound/NoResultsFound.tsx";
import SearchResults from "../../components/organisms/SearchResults/SearchResults.tsx";
import SearchMenu from "../../components/organisms/SearchMenu/SearchMenu.tsx";
import Benefits from "../../components/organisms/Benefits/Benefits.tsx";
import JobsBySection from "../../components/organisms/JobsBySection/JobsBySection.tsx";
import { vacanciesArray } from "../../Trash/VacancieArray.ts";
const SearchResultsPage = () => {
  const searchProp = "Project manager";
  const searchResultsArr = vacanciesArray;

  return (
    <div className={"searchResultsPage"}>
      <h2 className={"searchResultsPage__title"}>
        You searched for: {searchProp}
      </h2>
      <SearchMenu />

      {searchResultsArr.length > 0 ? (
        <div>
          <SearchResults resultsArray={searchResultsArr} />
          <JobsBySection />
          <Benefits />
        </div>
      ) : (
        <div>
          <h6 className={"searchResultsPage__subtitle"}>
            Sorry, no results found. Please, try again
          </h6>
          <NoResultsFound />
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
