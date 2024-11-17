import "./NetworkSignUp.scss";
import NetworkLogin from "../NetworkLogin/NetworkLogin.tsx";
const NetworkSignUp = () => {
  return (
    <div className={"networkSignUp"}>
      <NetworkLogin />
      <div className={"networkSignUp__linkContainer"}>
        <span>Don't have an account? </span>
        <a href={""} className={"networkSignUp__linkContainer--link"}>
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default NetworkSignUp;
