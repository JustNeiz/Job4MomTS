import React from "react";
import { FieldArray, Field, useFormikContext } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";

const WorkExperienceForm: React.FC = () => {
  const { values } = useFormikContext<ResumeFormValues>();

  return (
    <div>
      <h3>Work Experience</h3>
      <FieldArray name="workExperience">
        {({ remove, push }) => (
          <div>
            {values.workExperience.map((_, index) => (
              <div key={index}>
                <label>Job Title</label>
                <Field
                  name={`workExperience[${index}].jobTitle`}
                  placeholder="Job Title"
                />

                <label>Company Name</label>
                <Field
                  name={`workExperience[${index}].companyName`}
                  placeholder="Company Name"
                />

                <label>Industry</label>
                <Field
                  name={`workExperience[${index}].industry`}
                  placeholder="Industry"
                />

                <label>From</label>
                <Field
                  name={`workExperience[${index}].from.month`}
                  placeholder="Month"
                />
                <Field
                  name={`workExperience[${index}].from.year`}
                  placeholder="Year"
                />

                <label>To</label>
                <Field
                  name={`workExperience[${index}].to.month`}
                  placeholder="Month"
                />
                <Field
                  name={`workExperience[${index}].to.year`}
                  placeholder="Year"
                />

                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
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
              Add Experience
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default WorkExperienceForm;
