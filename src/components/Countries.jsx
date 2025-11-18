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
        <title>All Countries | React App</title>
        <meta
          name="description"
          content="Explore countries around the world with filters and detailed information."
        />
        {/* Open Graph tags for social sharing  */}
        <meta property="og:title" content="All Countries | React App" />
        <meta
          property="og:description"
          content="Explore countries around the world with filters and detailed information."
        />
        <meta property="og:type" content="website" />
        {/* TWITTER  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="All Countries | React App" />
        <meta
          name="twitter:description"
          content="Explore countries around the world with filters and detailed information."
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
