import React from "react";

import Card from "./Card";
import Search from "./Search";
import Filter from "./Filter";

import classes from "./SearchFilterGroup.module.css";

export default function SearchFilterGroup() {
  return (
    <section>
      <Card className={classes["search-filter-group"]}>
        <Search />
        <Filter />
      </Card>
    </section>
  );
}
