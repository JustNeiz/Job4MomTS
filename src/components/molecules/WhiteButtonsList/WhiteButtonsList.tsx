import "./WhiteButtonsList.scss";
import WhiteBorderedButton from "../../atoms/WhiteBorderedButton/WhiteBorderedButton.tsx";
const WhiteButtonsList = ({ array }) => {
  return (
    <div className={"popularRequestsList"}>
      {array.map((item) => (
        <WhiteBorderedButton>{item}</WhiteBorderedButton>
      ))}
    </div>
  );
};

export default WhiteButtonsList;
