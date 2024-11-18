import "./CheckboxCustom.scss";
import { Checkbox, CheckboxProps } from "@mantine/core";
import { ICheckBoxCustom } from "../../../interfaces/propsInterfaces/ICheckBoxCustom.ts";
import React from "react";
const CheckboxCustom: React.FC<ICheckBoxCustom> = ({ label }) => {
  const checkboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...others }) =>
    indeterminate ? (
      <img
        src={"src/assets/checkboxUnclicked.png"}
        alt={"unchecked"}
        {...others}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    ) : (
      <img
        src={"src/assets/checbox.png"}
        alt={"checked"}
        {...others}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    );
  return (
    <Checkbox
      label={label}
      icon={checkboxIcon}
      color={"white"}
      classNames={{ input: "input" }}
    />
  );
};

export default CheckboxCustom;
