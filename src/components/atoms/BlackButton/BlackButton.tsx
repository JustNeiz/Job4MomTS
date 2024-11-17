import "./BlackButton.scss";
const BlackButton = ({ children, height = "60px", onClick }) => {
  return (
    <div className={"blackButton"} style={{ height: height }} onClick={onClick}>
      <span>{children}</span>
    </div>
  );
};

export default BlackButton;
