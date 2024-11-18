import "./UserMenuHeader.scss";

import { LanguagePicker } from "../../atoms/LanguagePicker/LanguagePicker.tsx";
import WhiteBorderedButton from "../../atoms/WhiteBorderedButton/WhiteBorderedButton.tsx";
import LinkWithIcon from "../../atoms/LinkWithIcon/LinkWithIcon.tsx";

const UserMenuHeader = () => {
  return (
    <div className={"userMenuHeader"}>
      <LanguagePicker />
      <LinkWithIcon
        className={"userMenuHeader__employers"}
        href={"login"}
        icon={<img src={"src/assets/arrowRIght.png"} alt={"rightArrow"} />}
      >
        For Employers
      </LinkWithIcon>
      <LinkWithIcon
        icon={<img src={"src/assets/arrowRIght.png"} alt={"rightArrow"} />}
        href={"/main"}
      >
        Add Resume
      </LinkWithIcon>
      <WhiteBorderedButton
        rightSection={<img src={"src/assets/login.png"} alt={"logo"} />}
        className={"userMenuHeader__button"}
        href={"login"}
      >
        Log in
      </WhiteBorderedButton>
    </div>
  );
};

export default UserMenuHeader;
