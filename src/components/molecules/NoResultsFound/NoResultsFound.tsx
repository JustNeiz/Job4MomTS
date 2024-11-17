import "./NoResultsFound.scss";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle.tsx";
import LinkWithIcon from "../../atoms/LinkWithIcon/LinkWithIcon.tsx";
const NoResultsFound = () => {
  return (
    <div className={"noResultsFound"}>
      <SectionTitle>NOT FOUND</SectionTitle>
      <img src={"src/assets/megaphone.png"} alt={"megaphone"} />
      <LinkWithIcon
        icon={<img src={"src/assets/arrowRIght.png"} alt={"arrowRight"} />}
        href={"/main"}
        className={"noResultsFound__link"}
      >
        Go Home
      </LinkWithIcon>
    </div>
  );
};

export default NoResultsFound;
