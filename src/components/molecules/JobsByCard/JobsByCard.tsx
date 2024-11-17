import "./JobsByCard.scss";
import LinkWithIcon from "../../atoms/LinkWithIcon/LinkWithIcon.tsx";

const JobsByCard = ({ title, vacancyArr }) => {
  return (
    <div className={"jobsByCard"}>
      <h5 className={"jobsByCard__title"}>{title}</h5>
      {vacancyArr.slice(0, 6).map((item) => (
        <LinkWithIcon
          className={"jobsByCard__vacancy"}
          icon={`${item.vacancy_quantity} jobs`}
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
