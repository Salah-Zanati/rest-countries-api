import { useContext, useEffect, useState } from "react";
import { countriesContext } from "../App";
import Country from "./Country/Country";

const CountriesList = () => {
  const contextObj = useContext(countriesContext);
  const [data, setData] = useState();
  console.log("region", contextObj.region);
  useEffect(() => {
    contextObj.region !== "all"
      ? fetch(`https://restcountries.com/v3.1/region/${contextObj.region}`)
          .then((res) => res.json())
          .then((db) => {
            setData(db);
            console.log("db", db);
          })
      : fetch(`https://restcountries.com/v3.1/all`)
          .then((res) => res.json())
          .then((db) => {
            setData(db);
            console.log("db", db);
          });
  }, [contextObj.region]);
  useEffect(() => {}, []);
  const countries =
    data &&
    data.map((country) => {
      return <Country country={country} key={country.name.common} />;
    });

  return (
    <div className="countriesList">
      {<div className="container">{countries}</div>};
    </div>
  );
};

export default CountriesList;
