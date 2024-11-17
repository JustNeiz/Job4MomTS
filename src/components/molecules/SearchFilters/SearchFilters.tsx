import { Accordion, AccordionPanel } from "@mantine/core";
import "./SearchFilters.scss";
import CheckboxCustom from "../../atoms/CheckboxCustom/CheckboxCustom.tsx";
const SearchFilters = () => {
  const filtersArray = [
    {
      title: "PROFESSIONS",
      valueArray: [
        "Software Engineer",
        "Data Scientist",
        "Product Manager",
        "Marketing Specialist",
        "Graphic Designer",
        "UX/UI Designer",
        "Sales Manager",
        "Customer Support Representative",
        "HR Specialist",
        "Business Analyst",
      ],
    },
    {
      title: "EMPLOYMENT TYPE",
      valueArray: [
        "Full-time",
        "Part-time",
        "Remote",
        "Freelance",
        "Contract",
        "Internship",
        "Temporary",
        "Volunteer",
        "Apprenticeship",
        "Hybrid",
      ],
    },
    {
      title: "POSITION LEVEL",
      valueArray: [
        "Intern",
        "Junior",
        "Mid-level",
        "Senior",
        "Lead",
        "Manager",
        "Director",
        "VP",
        "C-level",
        "Founder",
      ],
    },
  ];
  const items = filtersArray.map((item) => (
    <Accordion.Item key={item.title} value={item.title}>
      <Accordion.Control>{item.title}</Accordion.Control>
      {item.valueArray.map((item) => (
        <AccordionPanel>
          <CheckboxCustom label={item} />
        </AccordionPanel>
      ))}
    </Accordion.Item>
  ));
  return (
    <div className={"searchFilters"}>
      <div className={"searchFilters__title"}>
        <img
          src={"src/assets/filters.png"}
          alt={"filters"}
          className={"searchFilters__title--icon"}
        />
        <h4> Filters</h4>
      </div>
      <Accordion
        classNames={{
          item: "searchFilters__filter",
          label: "searchFilters__filter--label",
          content: "searchFilters__filter--content",
        }}
      >
        {items}
      </Accordion>
    </div>
  );
};

export default SearchFilters;
