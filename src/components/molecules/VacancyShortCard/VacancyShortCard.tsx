import "./VacancyShortCard.scss";
import WhiteButtonsList from "../WhiteButtonsList/WhiteButtonsList.tsx";
import BlackButton from "../../atoms/BlackButton/BlackButton.tsx";
import { IVacancyProps } from "../../../interfaces/propsInterfaces/IVacancyProps.ts";
import React from "react";
const VacancyShortCard: React.FC<IVacancyProps> = ({ vacancy }) => {
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

        <WhiteButtonsList contentArray={vacancy_skillsRequire} />
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
          <BlackButton className={"vacancyShortCard__footer--applyButton"}>
            Apply
          </BlackButton>
        </div>
      </div>
    </div>
  );
};

export default VacancyShortCard;
