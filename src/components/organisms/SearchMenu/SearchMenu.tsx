import "./SearchMenu.scss";
import SearchForm from "../../molecules/SearchForm/SearchForm.tsx";
import WhiteButtonsList from "../../molecules/WhiteButtonsList/WhiteButtonsList.tsx";
import { jobSearchQueries } from "../../../Trash/fobSearchQueriesArray.ts";
const SearchMenu = () => {
  return (
    <div className={"searchMenu"}>
      <SearchForm />
      <div className={"searchMenu__popularRequests"}>
        <span>Popular requests: </span>
        <WhiteButtonsList contentArray={jobSearchQueries} />
      </div>
    </div>
  );
};

export default SearchMenu;
