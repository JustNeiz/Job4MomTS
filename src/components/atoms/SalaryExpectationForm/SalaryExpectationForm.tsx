import "./SalaryExpectationForm.scss";
import { Field, useFormikContext } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";
import React from "react";

const SalaryExpectationForm = () => {
  const { setFieldValue } = useFormikContext<ResumeFormValues>();
  return (
    <div className={"salaryExpectationForm"}>
      <label className={"salaryExpectationForm__label"}>
        Salary expectations (not necessarily){" "}
      </label>
      <div className={"salaryExpectationForm__wrapper"}>
        <span>from</span>
        <Field
          name="salaryMin"
          type="text"
          placeholder="Min amount"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("salaryMin", e.target.value)
          }
          className={"salaryExpectationForm__wrapper--input"}
        />
        <span>to</span>
        <Field
          name="salaryMax"
          type="text"
          placeholder="Max amount"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("salaryMax", e.target.value)
          }
          className={"salaryExpectationForm__wrapper--input"}
        />
      </div>
    </div>
  );
};

export default SalaryExpectationForm;
