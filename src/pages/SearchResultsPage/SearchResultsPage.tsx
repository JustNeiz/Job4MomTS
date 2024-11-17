import "./SearchResultsPage.scss";
import NoResultsFound from "../../components/molecules/NoResultsFound/NoResultsFound.tsx";
import SearchResults from "../../components/organisms/SearchResults/SearchResults.tsx";
import SearchMenu from "../../components/organisms/SearchMenu/SearchMenu.tsx";
import SearchVacancySection from "../../components/organisms/SearchVacancySection/SearchVacancySection.tsx";
import Benefits from "../../components/organisms/Benefits/Benefits.tsx";
import JobsBySection from "../../components/organisms/JobsBySection/JobsBySection.tsx";
const SearchResultsPage = () => {
  const searchProp = "Project manager";
  const searchResultsArr = [
    {
      vacancy_title: "Frontend Developer",
      vacancy_salary: "$60,000 - $80,000",
      company_name: "TechWave",
      company_logo: "https://example.com/logo1.png",
      vacancy_jobType: "Full-time",
      vacancy_languagesRequire: ["English"],
      vacancy_description:
        "Develop and maintain web applications with modern frontend technologies.",
      vacancy_skillsRequire: ["React", "TypeScript", "REST APIs"],
      vacancy_postedDate: "2024-11-10",
    },
    {
      vacancy_title: "Backend Developer",
      vacancy_salary: "$70,000 - $90,000",
      company_name: "CodeBase Inc.",
      company_logo: "https://example.com/logo2.png",
      vacancy_jobType: "Remote",
      vacancy_languagesRequire: ["English", "French"],
      vacancy_description:
        "Design and implement server-side applications with high performance.",
      vacancy_skillsRequire: [
        "Django",
        "PostgreSQL",
        "Docker",
        "Node JS",
        "Python",
        "MySQL",
        "React",
        "TypeScript",
      ],
      vacancy_postedDate: "2024-11-12",
    },
    {
      vacancy_title: "Data Scientist",
      vacancy_salary: "$100,000 - $120,000",
      company_name: "DataWorks",
      company_logo: "https://example.com/logo3.png",
      vacancy_jobType: "Full-time",
      vacancy_languagesRequire: ["English"],
      vacancy_description:
        "Analyze large datasets to extract meaningful insights and trends.",
      vacancy_skillsRequire: ["Machine Learning", "Pandas", "SQL"],
      vacancy_postedDate: "2024-11-08",
    },
    {
      vacancy_title: "UX/UI Designer",
      vacancy_salary: "$50,000 - $70,000",
      company_name: "DesignHive",
      company_logo: "https://example.com/logo4.png",
      vacancy_jobType: "Hybrid",
      vacancy_languagesRequire: ["English", "Spanish"],
      vacancy_description:
        "Create user-centered designs for web and mobile applications.",
      vacancy_skillsRequire: ["Figma", "Prototyping", "Wireframing"],
      vacancy_postedDate: "2024-11-05",
    },
    {
      vacancy_title: "Marketing Specialist",
      vacancy_salary: "$55,000 - $75,000",
      company_name: "AdMax",
      company_logo: "https://example.com/logo5.png",
      vacancy_jobType: "Part-time",
      vacancy_languagesRequire: ["English", "French"],
      vacancy_description:
        "Develop marketing strategies to boost company growth.",
      vacancy_skillsRequire: ["SEO", "Google Analytics", "Content Writing"],
      vacancy_postedDate: "2024-11-02",
    },
    {
      vacancy_title: "DevOps Engineer",
      vacancy_salary: "$85,000 - $110,000",
      company_name: "CloudOps",
      company_logo: "https://example.com/logo6.png",
      vacancy_jobType: "Remote",
      vacancy_languagesRequire: ["English"],
      vacancy_description:
        "Ensure reliable and efficient deployment pipelines.",
      vacancy_skillsRequire: ["AWS", "Kubernetes", "CI/CD"],
      vacancy_postedDate: "2024-11-09",
    },
    {
      vacancy_title: "Mobile App Developer",
      vacancy_salary: "$70,000 - $100,000",
      company_name: "Appify",
      company_logo: "https://example.com/logo7.png",
      vacancy_jobType: "Full-time",
      vacancy_languagesRequire: ["English", "German"],
      vacancy_description:
        "Develop high-performance mobile applications for Android.",
      vacancy_skillsRequire: ["Android Studio", "Firebase", "Git"],
      vacancy_postedDate: "2024-11-11",
    },
    {
      vacancy_title: "Business Analyst",
      vacancy_salary: "$65,000 - $85,000",
      company_name: "Insight Corp",
      company_logo: "https://example.com/logo8.png",
      vacancy_jobType: "Hybrid",
      vacancy_languagesRequire: ["English", "Spanish"],
      vacancy_description:
        "Bridge the gap between business needs and technical solutions.",
      vacancy_skillsRequire: ["Jira", "Requirement Analysis", "Communication"],
      vacancy_postedDate: "2024-11-04",
    },
    {
      vacancy_title: "Customer Support Representative",
      vacancy_salary: "$40,000 - $50,000",
      company_name: "HelpDesk Pro",
      company_logo: "https://example.com/logo9.png",
      vacancy_jobType: "Remote",
      vacancy_languagesRequire: ["English", "French"],
      vacancy_description:
        "Provide exceptional support and assistance to customers.",
      vacancy_skillsRequire: ["Communication", "CRM Tools", "Problem Solving"],
      vacancy_postedDate: "2024-11-07",
    },
    {
      vacancy_title: "Graphic Designer",
      vacancy_salary: "$45,000 - $60,000",
      company_name: "VisualArts",
      company_logo: "https://example.com/logo10.png",
      vacancy_jobType: "Part-time",
      vacancy_languagesRequire: ["English", "Italian"],
      vacancy_description:
        "Design compelling visuals for marketing and branding projects.",
      vacancy_skillsRequire: ["Photoshop", "Illustrator", "Creativity"],
      vacancy_postedDate: "2024-11-03",
    },
  ];

  return (
    <div className={"searchResultsPage"}>
      <h2 className={"searchResultsPage__title"}>
        You searched for: {searchProp}
      </h2>
      <SearchMenu />

      {searchResultsArr.length > 0 ? (
        <div>
          <SearchResults resultsArray={searchResultsArr} />
          <JobsBySection />
          <Benefits />
        </div>
      ) : (
        <div>
          <h6 className={"searchResultsPage__subtitle"}>
            Sorry, no results found. Please, try again
          </h6>
          <NoResultsFound />
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
