import { useFormikContext, Field, FieldArray } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";
import "./PersonalDetailsForm.scss";
import InputWithLabel from "../../atoms/InputWithLabel/InputWithLabel.tsx";
import SearchMultiSelect from "../../atoms/SearchMultiSelect/SearchMultiSelect.tsx";
import PhoneNumberInput from "../../atoms/PhoneNumberInput/PhoneNumberInput.tsx";
const PersonalDetailsForm = () => {
  const { values } = useFormikContext<ResumeFormValues>();

  return (
    <div className={"personalDetailsForm"}>
      <div className={"personalDetailsForm__nameContainer"}>
        <InputWithLabel
          name="firstName"
          type="text"
          placeholder="Your first name"
          inputClassName={"personalDetailsForm__input"}
          labelClassName={"personalDetailsForm__label"}
        >
          First Name*
        </InputWithLabel>

        <InputWithLabel
          name="lastName"
          type="text"
          placeholder="Your last name"
          inputClassName={"personalDetailsForm__input"}
          labelClassName={"personalDetailsForm__label"}
        >
          Last Name*
        </InputWithLabel>
      </div>

      <SearchMultiSelect />
      <PhoneNumberInput />

      <FieldArray name="socialMedia">
        {({ remove, push }) => (
          <div>
            <label className={"personalDetailsForm__label"}>Social Media</label>
            {values.socialMedia.map((_, index) => (
              <div key={index} className={"personalDetailsForm__socialMedia"}>
                <Field
                  className={"personalDetailsForm__input"}
                  name={`socialMedia[${index}]`}
                  placeholder="Profile URL"
                />
                {index !== 0 && (
                  <div
                    onClick={() => remove(index)}
                    className={"personalDetailsForm__socialMedia--deleteButton"}
                  ></div>
                )}
              </div>
            ))}
            <div onClick={() => push("")}>
              + Add more (you can do it later, also)
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default PersonalDetailsForm;
