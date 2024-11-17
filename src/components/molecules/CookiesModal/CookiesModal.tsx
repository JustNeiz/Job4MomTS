import { useEffect, useState } from "react";
import "./CookieModal.scss";

const CookiesModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      setIsVisible(false);
    }
  }, []);

  const handleAgree = () => {
    setIsVisible(false);
    localStorage.setItem("cookiesAccepted", "true");
  };

  return (
    <>
      {isVisible && (
        <div className="container">
          <div className="cookies-modal">
            <p className="cookies-modal__text">
              By using this site, you consent to the use of cookies to improve
              your user experience through analytics and personalised marketing
              efforts.
            </p>
            <button className="cookies-modal__button" onClick={handleAgree}>
              I agree
            </button>
            <a className="link" href="#ReadCookies">
              Read more
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiesModal;
