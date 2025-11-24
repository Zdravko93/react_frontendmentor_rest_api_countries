import { useCallback } from "react";

import { useAppContext } from "../context/AppContext";

export function useSearch() {
  const { countryInput, handleSearchCountries } = useAppContext();

  const handleSearchChange = useCallback(
    (e) => {
      handleSearchCountries(e.target.value);
    },
    [handleSearchCountries]
  );

  return { countryInput, handleSearchChange };
}
