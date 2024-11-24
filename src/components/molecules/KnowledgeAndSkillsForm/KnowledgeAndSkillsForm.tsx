import React from "react";
import { FieldArray, Field, useFormikContext } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";

const KnowledgeAndSkillsForm: React.FC = () => {
  const { values } = useFormikContext<ResumeFormValues>();

  return (
    <div>
      <h3>Knowledge and Skills</h3>
      <FieldArray name="skills">
        {({ remove, push }) => (
          <div>
            {values.skills.map((_, index) => (
              <div key={index}>
                <Field name={`skills[${index}]`} placeholder="Skill" />
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => push("")}>
              Add Skill
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default KnowledgeAndSkillsForm;
