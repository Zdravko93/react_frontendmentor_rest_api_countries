import { FaSearch } from "react-icons/fa";
import { useSearch } from "../customHooks/useSearch";
import Card from "./Card";

import classes from "./Search.module.css";

export default function Search() {
  const { countryInput, handleSearchChange } = useSearch();

  return (
    <Card className={classes.search}>
      <label htmlFor="search-country" className="sr-only">
        Search for a country
      </label>
      <input
        id="search-country"
        type="text"
        placeholder="Search for a country..."
        value={countryInput}
        onChange={handleSearchChange}
      />
      <FaSearch className={classes["search-icon"]} />
    </Card>
  );
}
