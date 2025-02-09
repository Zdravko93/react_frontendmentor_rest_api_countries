import { useAppContext } from "../context/AppContext";

export const useFilter = () => {
  const { selectedRegion, handleRegionSelect } = useAppContext();

  const handleSelectChange = (event) => {
    handleRegionSelect(event.target.value);
  };

  return { selectedRegion, handleSelectChange };
};
