import { MultiSelect } from "@mantine/core";
import { useFormikContext } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";
import WhiteButtonsList from "../../molecules/WhiteButtonsList/WhiteButtonsList.tsx";
import "./SearchMultiSelect.scss";
import React from "react";
import { ISearchMultiSelect } from "../../../interfaces/propsInterfaces/ISearchMultiSelect.ts";

const SearchMultiSelect: React.FC<ISearchMultiSelect> = ({
  optionsArray,
  placeholder,
  buttonsArray,
  name,
}) => {
  const { values, setFieldValue } = useFormikContext<ResumeFormValues>();

  const handleButtonClick = async (item: string) => {
    const currentJobs = (values[name] ?? []) as string[];
    const updatedJobs = currentJobs.includes(item)
      ? currentJobs.filter((job) => job !== item)
      : [...currentJobs, item];

    await setFieldValue(name, updatedJobs); // Обновить значение в Formik
  };

  const handleMultiSelectChange = async (selectedValues: string[]) => {
    await setFieldValue(name, selectedValues);
  };

  return (
    <div className={"searchMultiSelect"}>
      <MultiSelect
        data={optionsArray}
        searchable
        value={values[name] as string[]}
        onChange={handleMultiSelectChange}
        placeholder={placeholder}
        classNames={{
          input: "searchMultiSelect__wrapper",
          pill: "searchMultiSelect__pill",
          pillsList: "searchMultiSelect__pillList",
        }}
      />
      <WhiteButtonsList
        contentArray={buttonsArray}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default SearchMultiSelect;
