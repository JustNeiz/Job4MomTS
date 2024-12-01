import React from "react";
import { Field, useFormikContext } from "formik";
import "./EducationForm.scss";
import { Radio } from "@mantine/core";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";
const EducationForm: React.FC = () => {
  const { setFieldValue } = useFormikContext<ResumeFormValues>();
  return (
    <div className={"educationForm"}>
      <h4>English Level</h4>
      <Field name="englishLevel">
        {() => (
          <div className={"educationForm__radio"}>
            <Radio.Group
              label="Choose your English level"
              onChange={(value) => setFieldValue("englishLevel", value)}
            >
              <Radio value="none" label="No English" color={"black"} />
              <Radio
                value="beginner"
                label="Beginner/Elementary"
                color={"black"}
              />
              <Radio
                value="preIntermediate"
                label="Pre-Intermediate"
                color={"black"}
              />
              <Radio
                value="intermediate"
                label="Intermediate"
                color={"black"}
              />
              <Radio
                value="upperIntermediate"
                label="Upper-Intermediate"
                color={"black"}
              />
              <Radio value="advanced" label="Advanced" color={"black"} />
            </Radio.Group>
          </div>
        )}
      </Field>
      <div className={"educationForm__textArea"}>
        <h4>Education</h4>
        <Field
          name="education"
          as="textarea"
          placeholder="Describe your education"
          className={"educationForm__textArea--area"}
        />
      </div>
    </div>
  );
};

export default EducationForm;
