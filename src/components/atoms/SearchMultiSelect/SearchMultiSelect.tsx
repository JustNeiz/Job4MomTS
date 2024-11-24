import { MultiSelect } from "@mantine/core";
import { useFormikContext } from "formik";
import { ResumeFormValues } from "../../../interfaces/ResumeFormValues.ts";
import { jobSearchQueries } from "../../../Trash/fobSearchQueriesArray.ts";
import WhiteButtonsList from "../../molecules/WhiteButtonsList/WhiteButtonsList.tsx";
import "./SearchMultiSelect.scss";

const SearchMultiSelect = () => {
  const { values, setFieldValue } = useFormikContext<ResumeFormValues>();

  const handleButtonClick = async (item: string) => {
    const currentJobs = values.jobs || [];
    const updatedJobs = currentJobs.includes(item)
      ? currentJobs.filter((job) => job !== item)
      : [...currentJobs, item];

    await setFieldValue("jobs", updatedJobs); // Обновить значение в Formik
  };

  const handleMultiSelectChange = async (selectedValues: string[]) => {
    await setFieldValue("jobs", selectedValues);
  };

  return (
    <div className={"searchMultiSelect"}>
      <MultiSelect
        data={jobSearchQueries}
        searchable
        value={values.jobs}
        onChange={handleMultiSelectChange}
        placeholder={"Positions"}
        classNames={{
          input: "searchMultiSelect__wrapper",
          pill: "searchMultiSelect__pill",
          pillsList: "searchMultiSelect__pillList",
        }}
      />
      <WhiteButtonsList
        contentArray={jobSearchQueries}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default SearchMultiSelect;
