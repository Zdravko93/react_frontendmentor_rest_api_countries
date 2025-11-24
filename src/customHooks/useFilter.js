import { useCallback } from "react";

import { useAppContext } from "../context/AppContext";

export const useFilter = () => {
  const { selectedRegion, handleRegionSelect } = useAppContext();

  const handleSelectChange = useCallback(
    (event) => {
      handleRegionSelect(event.target.value);
    },
    [handleRegionSelect]
  );

  return { selectedRegion, handleSelectChange };
};
