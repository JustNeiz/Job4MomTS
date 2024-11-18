import "./SearchResults.scss";
import VacancyShortCard from "../../molecules/VacancyShortCard/VacancyShortCard.tsx";
import SearchFilters from "../../molecules/SearchFilters/SearchFilters.tsx";
import { ISearchResults } from "../../../interfaces/propsInterfaces/ISearchResults.ts";
import React, { useState } from "react";
import { Pagination } from "@mantine/core";
const SearchResults: React.FC<ISearchResults> = ({ resultsArray }) => {
  const [activePage, setPage] = useState(1);
  console.log(activePage);
  const head = (activePage - 1) * 3;
  const tail = activePage * 3;
  const currentPageArr = resultsArray.slice(head, tail);
  const totalPages = Math.ceil(resultsArray.length / 3);
  return (
    <div className={"searchResults"}>
      <div className={"searchResults__cards"}>
        <SearchFilters />
        <div className={"searchResults__cards--container"}>
          {currentPageArr.map((item) => (
            <VacancyShortCard vacancy={item} />
          ))}
        </div>
      </div>

      <Pagination
        total={totalPages}
        value={activePage}
        onChange={setPage}
        color={"black"}
        classNames={{
          control: "searchResults__pagination--control",
        }}
      />
    </div>
  );
};

export default SearchResults;
