/** @format */
import { useContext, useEffect, useState } from "react";
import { countriesContext } from "../../App";
import styles from "./CountryInfo.module.css";
import { Link, useParams } from "react-router-dom";
const CountryInfo = ({ countriesData }) => {
  console.log("countriesData", countriesData);
  const contextObj = useContext(countriesContext);
  const [data, setData] = useState();
  const { name } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((db) => {
        setData(db[0]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // function isAlogn ()
  function getFullCountryName(country) {
    countriesData.filter((e) => {
      return e.cca3 === country && e.name;
    });
    const countryObj = countriesData.find((e) => e.cca3 === country);
    return countryObj && countryObj.name.common;
  }
  console.log(
    "sh",
    `hsl(${contextObj.mood.current[`${contextObj.moodState}`].btnShadow})`
  );
  return (
    <div className={styles.countryInfo}>
      <div className="container">
        <Link
          to="/rest-countries-api-with-color-theme-switcher-master"
          className={styles.btnShap}
          id={styles.back}
          style={{
            backgroundColor: `hsl(${
              contextObj.mood.current[`${contextObj.moodState}`].elements
            })`,
            boxShadow: `0 0 10px hsl(${
              contextObj.mood.current[`${contextObj.moodState}`].btnShadow
            })`,
            color: `hsl(${
              contextObj.mood.current[`${contextObj.moodState}`].text
            })`,
          }}
        >
          <ion-icon name="arrow-back-outline"></ion-icon> Back
        </Link>
        {data && (
          <div
            className={styles.info}
            style={{
              color: `hsl(${
                contextObj.mood.current[`${contextObj.moodState}`].text
              })`,
            }}
          >
            <img src={data.flags.png} alt="flag" />
            <div>
              <p className={styles.countryName}>{data.name.common}</p>
              <div className={styles.details}>
                <ul>
                  <li key={1}>
                    Native Name: <span>{data.nativeName}</span>
                  </li>
                  <li key={2}>
                    Population: <span>{data.population}</span>
                  </li>
                  <li key={3}>
                    Region: <span>{data.region}</span>
                  </li>
                  <li key={4}>
                    Sub Region: <span>{data.subregion}</span>
                  </li>
                  <li key={5}>
                    Capital: <span>{data.capital}</span>
                  </li>
                </ul>
                <ul>
                  <li key={1}>
                    Currencies:{" "}
                    <span>
                      {Object.values(data.currencies)
                        .map((e) => e.name)
                        .join(",")}
                    </span>
                  </li>
                  <li key={2}>
                    Languages:{" "}
                    <span>{Object.values(data.languages).join(",")}</span>
                  </li>
                </ul>
              </div>
              {data.borders && (
                <div className={styles.borders}>
                  <p>Borders Countries: </p>
                  <ul>
                    {countriesData &&
                      data.borders.map((e, i) => {
                        return (
                          <li
                            key={i}
                            className={styles.btnShap}
                            style={{
                              backgroundColor: `hsl(${
                                contextObj.mood.current[
                                  `${contextObj.moodState}`
                                ].elements
                              })`,
                              boxShadow: `0 0 10px hsl(${
                                contextObj.mood.current[
                                  `${contextObj.moodState}`
                                ].btnShadow
                              })`,
                              color: `hsl(${
                                contextObj.mood.current[
                                  `${contextObj.moodState}`
                                ].text
                              })`,
                            }}
                          >
                            {getFullCountryName(e)}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
