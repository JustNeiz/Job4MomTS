import "./WhiteBorderedButton.scss";
import { useNavigate } from "react-router-dom";

const WhiteBorderedButton = ({
  children,
  className,
  rightSection,
  leftSection,
  href,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`whiteBorderedButton ${className} `}
      onClick={() => navigate(href)}
    >
      {leftSection && leftSection}
      <span>{children}</span>
      {rightSection && rightSection}
    </div>
  );
};

export default WhiteBorderedButton;
