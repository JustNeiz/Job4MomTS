import "./InputWithLabel.scss";
import { Field, useFormikContext } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";
import React from "react";
import { IInputWithLabel } from "../../../interfaces/propsInterfaces/IInputWithLabel.ts";

const InputWithLabel: React.FC<IInputWithLabel> = ({
  name,
  labelClassName,
  inputClassName,
  type,
  placeholder,
  children,
}) => {
  const { errors, touched } = useFormikContext<ResumeFormValues>();

  return (
    <div className={`inputWithLabel`}>
      <label className={labelClassName}>{children}</label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={`inputWithLabel__input ${inputClassName}`}
      />
      {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
    </div>
  );
};

export default InputWithLabel;
