export interface IVacancy {
  vacancy_title: string;
  vacancy_salary: number | string;
  company_name: string;
  company_logo: string;
  vacancy_jobType: string;
  vacancy_languagesRequire: string[];
  vacancy_description: string;
  vacancy_postedDate: string;
  vacancy_skillsRequire: string[];
}
