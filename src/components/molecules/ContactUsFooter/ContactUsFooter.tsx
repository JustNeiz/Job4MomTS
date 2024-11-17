import "./ContactUsFooter.scss";
const ContactUsFooter = () => {
  return (
    <div className={"contactUsFooter"}>
      <div className={"contactUsFooter__container"}>
        <img src={"src/assets/facebookLogo.png"} alt={"facebook"} />
        <img src={"src/assets/instLogo.png"} alt={"instagram"} />
        <span className={"contactUsFooter__container--text"}>
          +75 999 567 123
        </span>
      </div>
    </div>
  );
};

export default ContactUsFooter;
