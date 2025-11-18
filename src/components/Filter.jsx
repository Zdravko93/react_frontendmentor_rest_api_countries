import { useFilter } from "../customHooks/useFilter";
import Card from "./Card";

import classes from "./Filter.module.css";

export default function Filter() {
  const { selectedRegion, handleSelectChange } = useFilter();

  return (
    <Card className={classes.filter}>
      <label htmlFor="region-filter" className="sr-only">
        Filter by region
      </label>
      <select
        id="region-filter"
        value={selectedRegion}
        onChange={handleSelectChange}
      >
        <option value="Filter by region">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <span className={classes["select-arrow"]}></span>
    </Card>
  );
}
