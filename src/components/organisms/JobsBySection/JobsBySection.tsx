import "./JobsBySection.scss";
import JobsByCard from "../../molecules/JobsByCard/JobsByCard.tsx";
const JobsBySection = () => {
  const vacancies = [
    { vacancy_name: "Software Engineer", vacancy_quantity: 120 },
    { vacancy_name: "Data Scientist", vacancy_quantity: 80 },
    { vacancy_name: "Product Manager", vacancy_quantity: 50 },
    { vacancy_name: "Marketing Specialist", vacancy_quantity: 75 },
    { vacancy_name: "Graphic Designer", vacancy_quantity: 30 },
    { vacancy_name: "UX/UI Designer", vacancy_quantity: 40 },
    { vacancy_name: "Sales Manager", vacancy_quantity: 60 },
    { vacancy_name: "Customer Support Representative", vacancy_quantity: 100 },
    { vacancy_name: "HR Specialist", vacancy_quantity: 20 },
    { vacancy_name: "Business Analyst", vacancy_quantity: 90 },
  ];
  const smallVacancies = [
    { vacancy_name: "Frontend Developer", vacancy_quantity: 45 },
    { vacancy_name: "Backend Developer", vacancy_quantity: 55 },
    { vacancy_name: "QA Engineer", vacancy_quantity: 35 },
    { vacancy_name: "Project Manager", vacancy_quantity: 25 },
    { vacancy_name: "Data Analyst", vacancy_quantity: 40 },
    { vacancy_name: "Content Writer", vacancy_quantity: 15 },
  ];

  const miniVacancies = [
    { vacancy_name: "DevOps Engineer", vacancy_quantity: 20 },
    { vacancy_name: "SEO Specialist", vacancy_quantity: 10 },
    { vacancy_name: "Technical Support Specialist", vacancy_quantity: 30 },
  ];

  return (
    <div className={"jobsByList"}>
      <h2>Vacancies</h2>
      <div className={"jobsByList__card"}>
        <JobsByCard title={"Jobs by company"} vacancyArr={vacancies} />
        <JobsByCard title={"Jobs by job title"} vacancyArr={smallVacancies} />
        <JobsByCard
          title={"Jobs that doesn’t require a resume"}
          vacancyArr={miniVacancies}
        />
      </div>
    </div>
  );
};

export default JobsBySection;
