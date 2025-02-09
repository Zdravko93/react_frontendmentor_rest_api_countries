import React, { useState, useEffect, createContext, useContext } from "react";
import { shuffleCountries } from "../utils/countryUtils.js";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === null) {
    throw new Error("AppContext must be used within AppContextProvider.");
  }

  return context;
};

export const AppContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("Filter by region");
  const [theme, setTheme] = useState("light");

  // search for the country
  const handleSearchCountries = (input) => {
    setCountryInput(input);
  };
  // select region
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setCountryInput(""); // reset search input after region select
  };
  // change theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Could not fetch countries data");
        }
        const data = await response.json();
        // shuffle countries
        const shuffledData = shuffleCountries(data);
        setCountries(shuffledData);
      } catch (error) {
        console.error("Error fetching countries data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = countries;

    // If a region is selected, filter by region and ignore search term
    if (selectedRegion && selectedRegion !== "Filter by region") {
      filtered = countries.filter(
        (country) => country.region === selectedRegion
      );
    }
    if (countryInput) {
      // If no region is selected, filter by search term across all countries
      filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(countryInput.toLowerCase())
      );
    }

    // Set the filtered countries
    setFilteredCountries(filtered);
  }, [countryInput, countries, selectedRegion]);

  const contextValue = {
    countries,
    countryInput,
    selectedRegion,
    filteredCountries,
    theme,
    handleSearchCountries,
    handleRegionSelect,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
