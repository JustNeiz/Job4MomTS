import "./JobsByCard.scss";
import LinkWithIcon from "../../atoms/LinkWithIcon/LinkWithIcon.tsx";
import { IJobsByCard } from "../../../interfaces/propsInterfaces/IJobsByCard.ts";
import React from "react";

const JobsByCard: React.FC<IJobsByCard> = ({ title, vacancyArr }) => {
  return (
    <div className={"jobsByCard"}>
      <h5 className={"jobsByCard__title"}>{title}</h5>
      {vacancyArr.slice(0, 6).map((item) => (
        <LinkWithIcon
          className={"jobsByCard__vacancy"}
          icon={`${item.vacancy_quantity} jobs`}
          href={"/"}
        >
          {item.vacancy_name}
        </LinkWithIcon>
      ))}
      <img
        src={"src/assets/arrowDownCircle.png"}
        alt={"MoreVacancies"}
        className={"jobsByCard__expand"}
      />
    </div>
  );
};

export default JobsByCard;
