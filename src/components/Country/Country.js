/** @format */
import { useContext } from "react";
import { countriesContext } from "../../App";
import styles from "./Country.module.css";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  let contextObj = useContext(countriesContext);
  return (
    <Link
      className={styles.country}
      to={"name/" + country.name.common}
      style={{
        backgroundColor: `hsl(${
          contextObj.mood.current[`${contextObj.moodState}`].elements
        })`,
        color: `hsl(${
          contextObj.mood.current[`${contextObj.moodState}`].text
        })`,
      }}
    >
      <img
        src={country.flags.png}
        alt="flag"
        style={{
          border: `1px solid hsl(${
            contextObj.mood.current[`${contextObj.moodState}`].alt
          })`,
        }}
      />
      <div className={styles.details}>
        <p className={styles.countryName}>{country.name.common}</p>
        <ul>
          <li>
            Population: <span>{country.population}</span>
          </li>
          <li>
            Region: <span>{country.region}</span>
          </li>
          <li>
            Capital: <span>{country.capital}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default Country;
