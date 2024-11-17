import "./SearchResults.scss";
import VacancyShortCard from "../../molecules/VacancyShortCard/VacancyShortCard.tsx";
import SearchFilters from "../../molecules/SearchFilters/SearchFilters.tsx";
import Pagination from "../../atoms/Pagination/Pagination.tsx";
const SearchResults = ({ resultsArray }) => {
  return (
    <div className={"searchResults"}>
      <SearchFilters />
      <div className={"searchResults__cards"}>
        {resultsArray.map((item) => (
          <VacancyShortCard vacancy={item} />
        ))}
        {/*<Pagination />*/}
      </div>
    </div>
  );
};

export default SearchResults;
