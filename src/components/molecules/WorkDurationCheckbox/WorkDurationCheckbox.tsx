import CheckboxCustom from "../../atoms/CheckboxCustom/CheckboxCustom.tsx";

const WorkDurationCheckbox = () => {
  return (
    <div className={"workDurationCheckbox"}>
      <h5>How much time per day can you work?*</h5>
      <CheckboxCustom label={"<1"} name={"workHours"}></CheckboxCustom>
      <CheckboxCustom label={"2-3"} name={"workHours"}></CheckboxCustom>
      <CheckboxCustom label={"4-6"} name={"workHours"}></CheckboxCustom>
      <CheckboxCustom label={"6>"} name={"workHours"}></CheckboxCustom>
    </div>
  );
};

export default WorkDurationCheckbox;
