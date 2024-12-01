import { Select } from "@mantine/core";
import { useField, useFormikContext } from "formik";
import React from "react";
import { IDatePicker } from "../../../interfaces/propsInterfaces/IDatePicker.ts";
import "./DatePicker.scss";

const DatePicker: React.FC<IDatePicker> = ({
  placeholder,
  contentArray,
  name,
  type,
}) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const handleSelect = (value: string | null) => {
    setFieldValue(name, value);
  };
  if (type === "month") {
    return (
      <Select
        placeholder={placeholder}
        data={contentArray}
        value={field.value}
        onChange={handleSelect}
        classNames={{ input: "datePicker__input--month" }}
      />
    );
  } else {
    return (
      <Select
        placeholder={placeholder}
        data={contentArray}
        value={field.value}
        onChange={handleSelect}
        classNames={{ input: "datePicker__input--year" }}
      />
    );
  }
};

export default DatePicker;
