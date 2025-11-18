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
        <ul className={classes["country-list"]}>
          {filteredCountries.map((country, index) => (
            <li key={country.name.common}>
              <CountryCard countryData={country} index={index} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
