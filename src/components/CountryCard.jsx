import React from "react";
import { Link } from "react-router-dom";

import { useDelayedVisibility } from "../customHooks/useDelayedVisibility";

import Image from "./Image";
import Card from "./Card";
import DetailItem from "./DetailItem";

import classes from "./CountryCard.module.css";

export default function CountryCard({ countryData, index }) {
  const isVisible = useDelayedVisibility(index);

  return (
    <Link
      to={`/country-details/${countryData.name.common}`}
      className={`${classes.country} ${isVisible ? classes["fade-in"] : ""}`}
      style={{ animationDelay: `${index * 0.075}s` }}
    >
      <Image
        source={countryData.flags.svg || countryData.flag.png}
        altText={countryData.name}
      />
      <Card className={classes.text}>
        <DetailItem
          headerLevel="h2"
          label=""
          value={countryData.name.common}
          className={classes["country-title"]}
        />
        <DetailItem
          headerLevel="h3"
          label="Population"
          value={countryData.population.toLocaleString()}
        />
        <DetailItem
          headerLevel="h3"
          label="Region"
          value={countryData.region}
        />
        <DetailItem
          headerLevel="h3"
          label="Capital"
          value={countryData.capital}
        />
      </Card>
    </Link>
  );
}
