import "./SearchAutocomplete.scss";

import { Autocomplete } from "@mantine/core";
import { useState } from "react";

const SearchAutocomplete = () => {
  const [searchResults] = useState(["Front-end", "Back-end", "UI/UX"]);
  const [inputValue, setInputValue] = useState("");
  const icon = (
    <img
      src={"src/assets/resume.png"}
      alt={"resume logo"}
      className={"searchAutocomplete__icon"}
    />
  );
  return (
    <Autocomplete
      classNames={{
        input: "searchAutocomplete__input",
        dropdown: "searchAutocomplete__dropdown",
        wrapper: "searchAutocomplete__wrapper",
      }}
      w={"78%"}
      data={searchResults}
      value={inputValue}
      onChange={setInputValue}
      rightSection={icon}
      // onOptionSubmit={handleSelect}
      placeholder="Searching by profession, company, skills or download resume"
      radius="none"
      c="white"
      // styles={{
      //   input: {
      //     backgroundColor: "#1E1E1E",
      //     color: "white",
      //   },
      //   dropdown: {
      //     backgroundColor: "#1E1E1E",
      //     color: "white",
      //   },
      //   option: {
      //     backgroundColor: "black",
      //     "&[dataHovered]": {
      //       backgroundColor: "white",
      //     },
      //   },
      // }}
    />
  );
};

export default SearchAutocomplete;
