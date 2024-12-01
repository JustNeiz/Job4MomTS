import "./KnowledgeAndSkillsForm.scss";
import React from "react";
import { skills } from "../../../Trash/skillsArray.ts";
import SearchMultiSelect from "../../atoms/SearchMultiSelect/SearchMultiSelect.tsx";

const KnowledgeAndSkillsForm: React.FC = () => {
  return (
    <div className={"knowledgeAndSkillsForm"}>
      <h3>Knowledge and Skills</h3>
      <p>
        Choose the skills you have that will be useful in the job.
        <br />
        This will help employers find your resume and give you an edge over
        other candidates.{" "}
      </p>
      <SearchMultiSelect
        name={"skills"}
        placeholder={"Enter a skill name"}
        buttonsArray={skills}
        optionsArray={skills}
      />
    </div>
  );
};

export default KnowledgeAndSkillsForm;
