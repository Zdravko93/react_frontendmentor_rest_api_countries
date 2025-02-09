export const getNativeName = (country) => {
  const nativeNameKey = Object.keys(country.name.nativeName)[0];
  // || "N/A"    fallback in case a country object does not contain
  // 'official' property, to avoid application crash
  return country.name.nativeName[nativeNameKey]?.official || "N/A";
};

export const getCurrencies = (country) => {
  return country.currencies && typeof country.currencies === "object"
    ? Object.values(country.currencies)
    : [];
};

export const getLanguages = (country) => {
  return country.languages && typeof country.languages === "object"
    ? Object.values(country.languages)
    : [];
};

export const getBorderCountries = (country, countries) => {
  return Array.isArray(country.borders)
    ? country.borders
        .map((borderCode) => {
          const borderCountry = countries.find((c) => c.cca3 === borderCode);
          return borderCountry ? borderCountry.name.common : null; // Fallback to null
        })
        .filter((name) => name !== null)
    : []; // Filter out any null values in case the code doesn't match any country
};

export const shuffleCountries = (countries) => {
  const shuffledCountries = [...countries]; // Create a copy
  for (let i = shuffledCountries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCountries[i], shuffledCountries[j]] = [
      shuffledCountries[j],
      shuffledCountries[i],
    ];
  }
  return shuffledCountries;
};
