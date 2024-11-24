import { Formik, Form } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";
// import { resumeValidationSchema } from "../../../interfaces/resumeValidationSchema.ts";
import PersonalDetailsForm from "../../molecules/PersonalDetailsForm/PersonalDetailsForm.tsx";
import WorkExperienceForm from "../../molecules/WorkExperienceForm/WorkExperienceForm.tsx";
import KnowledgeAndSkillsForm from "../../molecules/KnowledgeAndSkillsForm/KnowledgeAndSkillsForm.tsx";
import EducationForm from "../../molecules/EducationForm/EducationForm.tsx";
import "./ResumeCreateForm.scss";

const initialValues: ResumeFormValues = {
  firstName: "",
  lastName: "",
  photo: null,
  jobs: [],
  phone: "",
  socialMedia: [""],
  country: "",
  city: "",
  salaryMin: undefined,
  salaryMax: undefined,
  workHours: [],
  workExperience: [
    {
      jobTitle: "",
      companyName: "",
      industry: "",
      from: { month: "", year: new Date().getFullYear() },
      to: { month: "", year: new Date().getFullYear() },
    },
  ],
  skills: [],
  englishLevel: "",
  education: "",
};

const ResumeForm = () => {
  const handleSubmit = (values: ResumeFormValues) => {
    console.log("Form submitted:", values);
  };

  return (
    <div className={"resumeCreateForm"}>
      <Formik
        initialValues={initialValues}
        // validationSchema={resumeValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <PersonalDetailsForm />
            <WorkExperienceForm />
            <KnowledgeAndSkillsForm />
            <EducationForm />
            <button type="submit">Create Resume</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResumeForm;
