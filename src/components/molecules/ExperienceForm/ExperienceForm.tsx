import "./ExperienceForm.scss";
import { FieldArray, useFormikContext } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";
import InputWithLabel from "../../atoms/InputWithLabel/InputWithLabel.tsx";
import DatePicker from "../../atoms/DatePicker/DatePicker.tsx";
import { monthsArray } from "../../../Trash/monthsArray.ts";
import { yearsArray } from "../../../Trash/yearsArray.ts";

const ExperienceForm = () => {
  const { values } = useFormikContext<ResumeFormValues>();
  return (
    <div className={"experienceForm"}>
      <h5 className={"experienceForm__label"}>
        Describe your work experience{" "}
      </h5>
      <FieldArray name="workExperience">
        {({ remove, push }) => (
          <div className={"experienceForm__form"}>
            {values.workExperience.map((_, index) => (
              <div key={index} className={"experienceForm__input"}>
                <InputWithLabel
                  name={`workExperience[${index}].jobTitle`}
                  type={"text"}
                  placeholder={"Job Title"}
                  labelClassName={"experienceForm__input--label"}
                >
                  Job Title
                </InputWithLabel>

                <InputWithLabel
                  name={`workExperience[${index}].companyName`}
                  type={"text"}
                  placeholder={"Company Name"}
                  labelClassName={"experienceForm__input--label"}
                >
                  Company Name
                </InputWithLabel>

                <InputWithLabel
                  name={`workExperience[${index}].industry`}
                  type={"text"}
                  placeholder={"Industry"}
                  labelClassName={"experienceForm__input--label"}
                >
                  Industry
                </InputWithLabel>

                <p className={"experienceForm__input--label"}>Period of work</p>
                <div className={"experienceForm__input--datePickerContainer"}>
                  <label className={"experienceForm__input--label"}>from</label>
                  <div className={"experienceForm__input--datePicker"}>
                    <DatePicker
                      name={`workExperience[${index}].from.month`}
                      placeholder="Month"
                      contentArray={monthsArray}
                      type={"month"}
                    />
                    <DatePicker
                      name={`workExperience[${index}].from.year`}
                      placeholder="Year"
                      contentArray={yearsArray}
                      type={"year"}
                    />
                  </div>

                  <label className={"experienceForm__input--label"}>to</label>
                  <div className={"experienceForm__input--datePicker"}>
                    <DatePicker
                      name={`workExperience[${index}].to.month`}
                      placeholder="Month"
                      contentArray={monthsArray}
                      type={"month"}
                    />
                    <DatePicker
                      name={`workExperience[${index}].to.year`}
                      placeholder="Year"
                      contentArray={yearsArray}
                      type={"year"}
                    />
                  </div>
                </div>

                {index !== 0 && (
                  <div
                    onClick={() => remove(index)}
                    className={"experienceForm__deleteButton"}
                  ></div>
                )}
              </div>
            ))}
            <div
              className={"experienceForm__addButton"}
              onClick={() =>
                push({
                  jobTitle: "",
                  companyName: "",
                  industry: "",
                  from: { month: "", year: new Date().getFullYear() },
                  to: { month: "", year: new Date().getFullYear() },
                })
              }
            >
              + Add more (you can do it later, also)
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default ExperienceForm;
