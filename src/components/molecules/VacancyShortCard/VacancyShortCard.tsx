import "./VacancyShortCard.scss";
import WhiteButtonsList from "../WhiteButtonsList/WhiteButtonsList.tsx";
import LinkWithIcon from "../../atoms/LinkWithIcon/LinkWithIcon.tsx";
import BlackButton from "../../atoms/BlackButton/BlackButton.tsx";
const VacancyShortCard = ({ vacancy }) => {
  // {
  //     vacancy_title: "Graphic Designer",
  //         vacancy_salary: "$45,000 - $60,000",
  //     company_name: "VisualArts",
  //     company_logo: "https://example.com/logo10.png",
  //     vacancy_jobType: "Part-time",
  //     vacancy_languagesRequire: ["English", "Italian"],
  //     vacancy_description:
  //     "Design compelling visuals for marketing and branding projects.",
  //         vacancy_skillsRequire: ["Photoshop", "Illustrator", "Creativity"],
  //     vacancy_postedDate: "2024-11-03",
  // }
  const {
    vacancy_title,
    vacancy_salary,
    company_name,
    company_logo,
    vacancy_jobType,
    vacancy_languagesRequire,
    vacancy_description,
    vacancy_postedDate,
    vacancy_skillsRequire,
  } = vacancy;
  return (
    <div className={"vacancyShortCard"}>
      <div className={"vacancyShortCard__header"}>
        <h4>{vacancy_title}</h4>
        <img src={company_logo} alt={"company logo"} />
      </div>

      <div className={"vacancyShortCard__body"}>
        <h6 className={"vacancyShortCard__body--salary"}>{vacancy_salary}</h6>

        <div className={"vacancyShortCard__body--info"}>
          <span>{company_name}</span>
          <span>{vacancy_jobType}</span>
          <span>{vacancy_languagesRequire.join(", ")}</span>
        </div>

        <h6 className={"vacancyShortCard__body--desc"}>
          {vacancy_description}
        </h6>

        <WhiteButtonsList array={vacancy_skillsRequire} />
      </div>

      <div className={"vacancyShortCard__footer"}>
        <span className={"vacancyShortCard__footer--text"}>
          {vacancy_postedDate}
        </span>
        <div className={"vacancyShortCard__footer--apply"}>
          <div className={"vacancyShortCard__footer--saveButton"}>
            <img src={"src/assets/heart.png"} alt={"heart"} />
            <span>Save</span>
          </div>
          <BlackButton height={"40px"}>Apply</BlackButton>
        </div>
      </div>
    </div>
  );
};

export default VacancyShortCard;
