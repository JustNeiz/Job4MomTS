import "./SearchForm.scss";
import SearchAutocomplete from "../../atoms/SearchAutocomplete/SearchAutocomplete.tsx";
import BlackButton from "../../atoms/BlackButton/BlackButton.tsx";
import { useNavigate } from "react-router-dom";
const SearchForm = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/results");
  return (
    <div className={"searchForm"}>
      <SearchAutocomplete />
      <BlackButton onClick={handleClick}>Search</BlackButton>
    </div>
  );
};

export default SearchForm;
