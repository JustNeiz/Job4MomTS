import "./SearchSectionForm.scss";
import BlackButton from "../BlackButton/BlackButton.tsx";
const SearchSectionForm = () => {
  return (
    <div className={"searchSectionForm"}>
      <input
        className={"searchSectionForm__input"}
        placeholder={"Your email"}
      />
      <BlackButton>Send</BlackButton>
    </div>
  );
};

export default SearchSectionForm;
