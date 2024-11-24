import ResumeCreateForm from "../../components/organisms/ResumeCreateForm/ResumeCreateForm.tsx";
import "./ResumeCreationPage.scss";
import SectionTitle from "../../components/atoms/SectionTitle/SectionTitle.tsx";
const ResumeCreationPage = () => {
  return (
    <div className={"resumeCreationPage"}>
      <SectionTitle>CREATE RESUME</SectionTitle>
      <ResumeCreateForm />
    </div>
  );
};

export default ResumeCreationPage;
