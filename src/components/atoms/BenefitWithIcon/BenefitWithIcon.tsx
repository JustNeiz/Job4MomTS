import "./BenefitWithIcon.scss";

const BenefitWithIcon = ({ iconURL, label }) => {
  return (
    <div className={"benefitWithIcon"}>
      <img
        src={iconURL}
        alt="benefitIcon"
        className={"benefitWithIcon__icon"}
      />
      <h5>{label}</h5>
    </div>
  );
};

export default BenefitWithIcon;
