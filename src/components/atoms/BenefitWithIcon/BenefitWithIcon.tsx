import "./BenefitWithIcon.scss";
import { IBenefitWithIcon } from "../../../interfaces/propsInterfaces/IBenefitWithIcon.ts";
import React from "react";

const BenefitWithIcon: React.FC<IBenefitWithIcon> = ({ iconURL, label }) => {
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
