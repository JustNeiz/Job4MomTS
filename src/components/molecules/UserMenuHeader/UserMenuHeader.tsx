import "./UserMenuHeader.scss";

import { LanguagePicker } from "../../atoms/LanguagePicker/LanguagePicker.tsx";
import WhiteBorderedButton from "../../atoms/WhiteBorderedButton/WhiteBorderedButton.tsx";
import LinkWithIcon from "../../atoms/LinkWithIcon/LinkWithIcon.tsx";
import { Navigate } from "react-router-dom";

const UserMenuHeader = () => {
  return (
    <div className={"userMenuHeader"}>
      <LanguagePicker />
      <LinkWithIcon
        href={"login"}
        fz={"20px"}
        icon={<img src={"src/assets/arrowRIght.png"} alt={"rightArrow"} />}
      >
        For Employers
      </LinkWithIcon>
      <LinkWithIcon
        icon={<img src={"src/assets/arrowRIght.png"} alt={"rightArrow"} />}
      >
        Add Resume
      </LinkWithIcon>
      <WhiteBorderedButton
        rightSection={<img src={"src/assets/login.png"} alt={"logo"} />}
        width={"200px"}
        href={"login"}
      >
        Log in
      </WhiteBorderedButton>
    </div>
  );
};

export default UserMenuHeader;
