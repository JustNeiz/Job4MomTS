import "./CheckboxCustom.scss";
import { Checkbox } from "@mantine/core";
const CheckboxCustom = ({ label }) => {
  const checkboxIcon = ({ indeterminate, ...others }) =>
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
