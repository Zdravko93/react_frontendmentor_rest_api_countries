import React from "react";

import { useAppContext } from "../context/AppContext";

import CountryCard from "./CountryCard";
import SearchFilterGroup from "./SearchFilterGroup";

import classes from "./Countries.module.css";

export default function Countries() {
  const { filteredCountries } = useAppContext();

  return (
    <>
      <SearchFilterGroup />
      <section className={classes.countries}>
        {filteredCountries.map((country, index) => (
          <React.Fragment key={country.name.common}>
            <CountryCard countryData={country} index={index} />
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
