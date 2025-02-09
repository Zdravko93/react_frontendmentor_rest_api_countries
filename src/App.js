import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "./components/Header";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route
          path="/country-details/:countryName"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <CountryDetails />
            </motion.div>
          }
        />
      </Routes>
    </>
  );
}
