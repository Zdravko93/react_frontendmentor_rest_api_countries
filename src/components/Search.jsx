import React from "react";

import { FaSearch } from "react-icons/fa";
import { useSearch } from "../customHooks/useSearch";
import Card from "./Card";

import classes from "./Search.module.css";

export default function Search() {
  const { countryInput, handleSearchChange } = useSearch();

  return (
    <Card className={classes.search}>
      <input
        type="text"
        placeholder="Search for a country..."
        value={countryInput}
        onChange={handleSearchChange}
      />
      <FaSearch className={classes["search-icon"]} />
    </Card>
  );
}
