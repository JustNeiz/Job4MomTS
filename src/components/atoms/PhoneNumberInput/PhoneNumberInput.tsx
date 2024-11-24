import "./PhoneNumberInput.scss";
import { Autocomplete, AutocompleteProps } from "@mantine/core";
import { phoneCodes } from "../../../Trash/phoneCodes.ts";
import { flags } from "../../../Trash/flags.ts";
import React, { useEffect, useState } from "react";
import { Field, useFormikContext } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";

const PhoneNumberInput = () => {
  const { errors, touched, setFieldValue } =
    useFormikContext<ResumeFormValues>();

  const [autoCompleteValue, setAutocompleteValue] =
    useState<keyof typeof flags>("US");
  const [defaultInputValue, setDefaultInputValue] = useState("+1");

  useEffect(() => {
    setDefaultInputValue(phoneCodes[autoCompleteValue]);
    setFieldValue("phone", phoneCodes[autoCompleteValue]);
  }, [autoCompleteValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value.startsWith(defaultInputValue)) {
      setFieldValue("phone", defaultInputValue);
    } else {
      setFieldValue("phone", value);
    }
  };

  const renderOption: AutocompleteProps["renderOption"] = ({ option }) => {
    const countryCode = option.value as keyof typeof flags;
    return (
      <div className={"phoneNumberInput__picker--dropDownOption"}>
        <img
          src={flags[countryCode]}
          alt={"flag"}
          className={"phoneNumberInput__picker--dropDownOption--dropDownFlag"}
        />
        <span>{option.value}</span>
      </div>
    );
  };

  return (
    <div className={"phoneNumberInput"}>
      <Autocomplete
        data={Object.keys(phoneCodes)}
        maxDropdownHeight={200}
        defaultValue={"US"}
        renderOption={renderOption}
        value={autoCompleteValue}
        onChange={(value) => setAutocompleteValue(value as keyof typeof flags)}
        w={"15%"}
        leftSection={
          <img
            src={
              flags[autoCompleteValue] ? flags[autoCompleteValue] : flags["US"]
            }
            alt={"flag"}
            className={"phoneNumberInput__picker--dropDownOption--dropDownFlag"}
          />
        }
        classNames={{
          input: "phoneNumberInput__picker--input",
          wrapper: "phoneNumberInput__picker--wrapper",
          section: "phoneNumberInput__picker--section",
        }}
      />
      <Field
        name="phone"
        type="text"
        className={"phoneNumberInput__input"}
        placeholder={"Phone Number"}
        onChange={handleChange}
      />
      {errors.phone && touched.phone && <div>{errors.phone}</div>}
    </div>
  );
};
export default PhoneNumberInput;
