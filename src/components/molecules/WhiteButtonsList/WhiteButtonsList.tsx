import "./WhiteButtonsList.scss";
import WhiteBorderedButton from "../../atoms/WhiteBorderedButton/WhiteBorderedButton.tsx";
import React from "react";
import { IWhiteButtonsList } from "../../../interfaces/propsInterfaces/IWhiteButtonsList.ts";
const WhiteButtonsList: React.FC<IWhiteButtonsList> = ({
  contentArray,
  onButtonClick,
}) => {
  return (
    <div className={"popularRequestsList"}>
      {contentArray.map((item) => (
        <WhiteBorderedButton onClick={() => onButtonClick?.(item)}>
          {item}
        </WhiteBorderedButton>
      ))}
    </div>
  );
};

export default WhiteButtonsList;
