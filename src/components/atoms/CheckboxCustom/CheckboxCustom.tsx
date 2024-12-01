import "./CheckboxCustom.scss";
import { Checkbox, CheckboxProps } from "@mantine/core";
import React from "react";
import { useFormikContext } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";

interface ICheckBoxCustom {
  label: string;
  name: keyof ResumeFormValues; // Указываем, что name — это ключ из ResumeFormValues
}

const CheckboxCustom: React.FC<ICheckBoxCustom> = ({ label, name }) => {
  const { values, setFieldValue } = useFormikContext<ResumeFormValues>();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValues = Array.isArray(values[name])
      ? (values[name] as string[])
      : [];
    if (e.target.checked) {
      setFieldValue(name, [...currentValues, label]);
    } else {
      setFieldValue(
        name,
        currentValues.filter((item) => item !== label),
      );
    }
  };

  return (
    <div className={"checkboxCustom"}>
      <Checkbox
        label={label}
        icon={checkboxIcon}
        color={"white"}
        classNames={{ input: "input" }}
        checked={
          Array.isArray(values[name]) &&
          (values[name] as string[]).includes(label)
        }
        onChange={handleChange}
      />
    </div>
  );
};

export default CheckboxCustom;
