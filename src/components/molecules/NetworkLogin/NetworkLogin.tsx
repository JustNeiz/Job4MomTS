import "./NetworkLogin.scss";
import WhiteBorderedButton from "../../atoms/WhiteBorderedButton/WhiteBorderedButton.tsx";
const NetworkLogin = () => {
  return (
    <div className={"networkLogin"}>
      <WhiteBorderedButton
        className={"networkLogin__button"}
        leftSection={
          <img src={"src/assets/googleLogo.svg"} alt={"google logo"} />
        }
      >
        Continue with Google
      </WhiteBorderedButton>
      <WhiteBorderedButton
        className={"networkLogin__button"}
        leftSection={
          <img src={"src/assets/appleLogo.png"} alt={"apple logo"} />
        }
      >
        Continue with Apple
      </WhiteBorderedButton>
    </div>
  );
};

export default NetworkLogin;
