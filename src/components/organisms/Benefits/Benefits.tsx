import "./Benefits.scss";
import BenefitWithIcon from "../../atoms/BenefitWithIcon/BenefitWithIcon.tsx";
const Benefits = () => {
  return (
    <div>
      <h2>How can we help</h2>
      <div className={"benefits"}>
        <BenefitWithIcon
          label={"Jobs offers special for mom’s"}
          iconURL={"src/assets/offers.png"}
        />
        <BenefitWithIcon
          label={"Flexible working hours"}
          iconURL={"src/assets/hours1.png"}
        />
        <BenefitWithIcon
          label={"Psychology support"}
          iconURL={"src/assets/support.png"}
        />
      </div>
    </div>
  );
};

export default Benefits;
