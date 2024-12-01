import "./ResidenceSection.scss";
import { City, Country } from "country-state-city";
import { Autocomplete } from "@mantine/core";
import { useState } from "react";
import { useFormikContext } from "formik";

const ResidenceSection = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const { setFieldValue } = useFormikContext();

  const countriesMap = Country.getAllCountries().reduce(
    (acc, country) => {
      acc[country.name] = country.isoCode;
      return acc;
    },
    {} as Record<string, string>,
  );

  const countriesArray = Object.keys(countriesMap);

  const citiesArray = countryCode
    ? Array.from(
        //@ts-ignore
        new Set(City.getCitiesOfCountry(countryCode).map((city) => city.name)),
      )
    : [];

  const handleCountryChange = (selectedCountry: string) => {
    setCountry(selectedCountry);
    const selectedCountryCode = countriesMap[selectedCountry];
    setCountryCode(selectedCountryCode || "");
    setCity("");
    setFieldValue("country", selectedCountry);
  };

  const handleCityChange = (selectedCity: string) => {
    setCity(selectedCity);
    setFieldValue("city", selectedCity); // Устанавливаем значение в Formik
  };

  return (
    <div className={"residenceSection"}>
      <label className={"residenceSection__label"}>Country of Residence*</label>
      <Autocomplete
        data={countriesArray}
        value={country}
        onChange={handleCountryChange}
        placeholder="Select your country"
        classNames={{
          wrapper: "residenceSection__wrapper",
          input: "residenceSection__input",
        }}
        name={"country"}
      />

      <label className={"residenceSection__label"}>City of Residence*</label>
      <Autocomplete
        data={citiesArray}
        value={city}
        onChange={handleCityChange}
        placeholder="Select your city"
        disabled={!countryCode}
        classNames={{
          wrapper: "residenceSection__wrapper",
          input: "residenceSection__input",
        }}
        name={"city"}
      />
    </div>
  );
};

export default ResidenceSection;
