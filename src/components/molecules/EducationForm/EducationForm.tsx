import React from "react";
import { Field } from "formik";

const EducationForm: React.FC = () => {
  return (
    <div>
      <h3>Education</h3>
      <Field
        name="education"
        as="textarea"
        placeholder="Describe your education"
      />
    </div>
  );
};

export default EducationForm;
