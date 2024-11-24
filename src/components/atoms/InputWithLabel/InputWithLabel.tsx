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
    <div>
      <label className={labelClassName}>{children}</label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={inputClassName}
      />
      {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
    </div>
  );
};

export default InputWithLabel;
