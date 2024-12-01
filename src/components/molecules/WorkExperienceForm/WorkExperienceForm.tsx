import React from "react";
import SalaryExpectationForm from "../../atoms/SalaryExpectationForm/SalaryExpectationForm.tsx";
import ExperienceForm from "../ExperienceForm/ExperienceForm.tsx";
import WorkDurationCheckbox from "../WorkDurationCheckbox/WorkDurationCheckbox.tsx";

const WorkExperienceForm: React.FC = () => {
  return (
    <div>
      <SalaryExpectationForm />
      <WorkDurationCheckbox />
      <ExperienceForm />
    </div>
  );
};

export default WorkExperienceForm;
