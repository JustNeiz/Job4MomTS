import "./SectionTitle.scss";
import { ISectionTitle } from "../../../interfaces/propsInterfaces/ISectionTitle.ts";
import React from "react";

const SectionTitle: React.FC<ISectionTitle> = ({ children }) => {
  return <h1 className={"sectionTitle"}>{children}</h1>;
};

export default SectionTitle;
