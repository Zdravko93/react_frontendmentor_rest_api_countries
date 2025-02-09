import { useAppContext } from "../context/AppContext";

export function useSearch() {
  const { countryInput, handleSearchCountries } = useAppContext();

  const handleSearchChange = (e) => {
    handleSearchCountries(e.target.value);
  };

  return { countryInput, handleSearchChange };
}
