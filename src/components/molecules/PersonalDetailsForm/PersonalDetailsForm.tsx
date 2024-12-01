import "./PersonalDetailsForm.scss";
import InputWithLabel from "../../atoms/InputWithLabel/InputWithLabel.tsx";
import SearchMultiSelect from "../../atoms/SearchMultiSelect/SearchMultiSelect.tsx";
import PhoneNumberInput from "../../atoms/PhoneNumberInput/PhoneNumberInput.tsx";
import SocialMediaForm from "../SocialMediaForm/SocialMediaForm.tsx";
import { jobSearchQueries } from "../../../Trash/fobSearchQueriesArray.ts";
const PersonalDetailsForm = () => {
  return (
    <div className={"personalDetailsForm"}>
      <div className={"personalDetailsForm__nameContainer"}>
        <InputWithLabel
          name="firstName"
          type="text"
          placeholder="Your first name"
          // inputClassName={"personalDetailsForm__input"}
          labelClassName={"personalDetailsForm__label"}
        >
          First Name*
        </InputWithLabel>

        <InputWithLabel
          name="lastName"
          type="text"
          placeholder="Your last name"
          // inputClassName={"personalDetailsForm__input"}
          labelClassName={"personalDetailsForm__label"}
        >
          Last Name*
        </InputWithLabel>
      </div>
      <label className={"personalDetailsForm__label"}>
        Jobs you are interested in?*
      </label>
      <SearchMultiSelect
        placeholder={"Positions"}
        optionsArray={jobSearchQueries}
        buttonsArray={jobSearchQueries}
        name={"jobs"}
      />
      <PhoneNumberInput />
      <SocialMediaForm />
    </div>
  );
};

export default PersonalDetailsForm;
