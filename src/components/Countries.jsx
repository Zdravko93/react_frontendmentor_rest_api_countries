import { useAppContext } from "../context/AppContext";
import { Helmet } from "react-helmet-async";

import CountryCard from "./CountryCard";
import SearchFilterGroup from "./SearchFilterGroup";

import classes from "./Countries.module.css";

export default function Countries() {
  const { filteredCountries } = useAppContext();

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Frontend Mentor REST API Countries | React App</title>
        <meta
          name="description"
          content="Explore countries around the world with filters and detailed information."
        />

        <link
          rel="canonical"
          href="https://zdravko93.github.io/react_frontendmentor_rest_api_countries/"
        />

        {/* Open Graph  */}
        <meta property="og:title" content="All Countries | React App" />
        <meta
          property="og:description"
          content="Explore countries around the world with filters and detailed information."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://zdravko93.github.io/react_frontendmentor_rest_api_countries/screenshot-rest-api-countries-project.png"
        />
        {/* TWITTER  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Frontend Mentor REST API Countries | React App"
        />
        <meta
          name="twitter:description"
          content="Explore countries around the world with filters and detailed information."
        />
        <meta
          property="twitter:image"
          content="https://zdravko93.github.io/react_frontendmentor_rest_api_countries/screenshot-rest-api-countries-project.png"
        />
      </Helmet>

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
