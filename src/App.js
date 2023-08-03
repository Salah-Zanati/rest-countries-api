/** @format */

import "./App.css";
import { createContext, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import Search from "./components/Search";
import CountriesList from "./components/CountriesList";
import Filters from "./components/Filters";
import { Outlet, Route, Routes } from "react-router-dom";

export const countriesContext = createContext({});

function App() {
  const [data, setData] = useState();
  const [region, setRegion] = useState("all");
  const mood = useRef({
    dark: {
      elements: "209, 23%, 22%",
      background: "207, 26%, 17%",
      text: "0, 0%, 100%",
      alt: "209 23% 24% / 1",
      btnShadow: "207 26% 12%",
    },
    light: {
      elements: "0, 0%, 100%",
      background: "0, 0%, 98%",
      text: "200, 15%, 8%",
      input: "0, 0%, 52%",
      alt: "0, 0% 99%",
      btnShadow: "0 0% 80%",
    },
  });
  const [moodState, setMoodState] = useState("dark");
  const root = document.querySelector("#root");
  root.style.backgroundColor = `hsl(${
    mood.current[`${moodState}`].background
  })`;
  root.style.color = `hsl(${mood.current[`${moodState}`].text})`;
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((db) => {
        setData(db);
      });
  }, []);
  return (
    <>
      <countriesContext.Provider
        value={{
          region,
          setRegion: (regionName) => setRegion(regionName),
          mood,
          moodState,
          setMoodState: (mood) => setMoodState(mood),
        }}
      >
        <Navbar />
        <Routes>
          <Route
            path="rest-countries-api-with-color-theme-switcher-master"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route
              path=""
              element={
                <>
                  <div className="search-filters">
                    <div className="container">
                      <Search data={data} />
                      <Filters />
                    </div>
                  </div>
                  <CountriesList data={data} />
                </>
              }
            />
            <Route
              path="name/:name"
              element={<CountryInfo countriesData={data} />}
            />
          </Route>
        </Routes>
      </countriesContext.Provider>
      {/* {data != null && (
          <Navbar />
          {countryDetails ? (
            <CountryInfo
              back={setCountryDetails}
              allCountries={countriesData}
              country={countryDetails}
            />
          ) : (
            <>
              <div className="search-filters">
                <div className="container">
                  <Search setCountryDetails={setCountryDetails} data={data} />
                  <Filters />
                </div>
              </div>
              <CountriesList data={data} />
            </>
          )}
      )} */}
    </>
  );
}
export default App;
