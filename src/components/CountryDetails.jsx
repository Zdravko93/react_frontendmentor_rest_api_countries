import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { IoIosArrowRoundBack } from "react-icons/io";
import {
  getNativeName,
  getCurrencies,
  getLanguages,
  getBorderCountries,
} from "../utils/countryUtils";
import { useAppContext } from "../context/AppContext";

import Button from "./Button";
import Card from "./Card";
import Image from "./Image";
import DetailItem from "./DetailItem";

import classes from "./CountryDetails.module.css";

export default function CountryDetails() {
  const { countries } = useAppContext();
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [country, setCountry] = useState(null);

  const handleBackButtonClick = () => {
    navigate(-1); // back to the previous page
  };

  const handleHomepageButtonClick = () => {
    navigate("/"); // back to the root of the application / homepage
  };

  // display selected country
  useEffect(() => {
    setIsDataLoaded(false);
    if (countries && countries.length > 0 && countryName) {
      const foundCountry = countries.find(
        (country) =>
          country.name.common.toLowerCase() === countryName.toLowerCase().trim()
      );
      if (foundCountry) {
        setCountry(foundCountry);
      }
      setIsDataLoaded(true);
    }
  }, [countries, countryName]);

  if (!isDataLoaded) {
    return (
      <div className={classes["loading-spinner"]}>
        {/* {display spinner} */}
        <ClipLoader color="#4A90E2" loading={true} size={50} />
        <p>Fetching country data...</p>
      </div>
    );
  }

  if (!country) {
    return (
      <p className={classes["country-error"]}>No country data available.</p>
    );
  }

  const nativeName = getNativeName(country);
  const currencies = getCurrencies(country);
  const languages = getLanguages(country);
  const borderCountries = getBorderCountries(country, countries);

  // if data is available, render, otherwise fallback to "N/A"
  const getValueOrNA = (value) => (value ? value : "N/A");

  return (
    <>
      <main className={classes["country-details"]}>
        <Button
          onClick={handleBackButtonClick}
          className={classes["back-button"]}
          aria-label="Go back to previous page"
        >
          <IoIosArrowRoundBack className={classes["arrow-back"]} />
          Back
        </Button>

        <Card className={classes["country-card"]}>
          <Image source={country.flags.svg} altText={country.name.common} />
          <Card className={classes["country-text"]}>
            <h3>{country.name.common} </h3>
            <Card className={classes["country-text-wrapper"]}>
              <Card className={classes["country-text-upper"]}>
                <DetailItem
                  label="Native Name"
                  value={getValueOrNA(nativeName)}
                />
                <DetailItem
                  label="Population"
                  value={getValueOrNA(country.population.toLocaleString())}
                />
                <DetailItem
                  label="Region"
                  value={getValueOrNA(country.region)}
                />
                <DetailItem
                  label="Sub Region"
                  value={getValueOrNA(country.subregion)}
                />
                <DetailItem
                  label="Capital"
                  value={getValueOrNA(country.capital)}
                />
              </Card>
              <Card className={classes["country-text-lower"]}>
                <DetailItem
                  label="Top Level Domain"
                  value={getValueOrNA(country.tld)}
                />
                <DetailItem
                  className={classes.currencies}
                  label="Currencies"
                  value={getValueOrNA(currencies)}
                  isCurrencyList={true}
                />
                <DetailItem
                  className={classes.languages}
                  label="Languages"
                  value={getValueOrNA(languages)}
                  isLanguageList={true}
                />
              </Card>
            </Card>
            <Card className={classes["country-borders"]}>
              <DetailItem
                className={classes.borders}
                linkClassName={classes["country-link"]}
                noBorderTextClassName={classes["no-border-text"]}
                label="Border Countries"
                value={getValueOrNA(borderCountries)}
                isBorderList={true}
              />
            </Card>
          </Card>
        </Card>
        <Button
          className={classes["homepage-button"]}
          onClick={handleHomepageButtonClick}
          aria-label="Go to Homepage"
        >
          Go to Homepage
        </Button>
      </main>
    </>
  );
}
