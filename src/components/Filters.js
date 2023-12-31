import { useContext } from "react";
import { countriesContext } from "../App";

const Filters = () => {
  let contextObj = useContext(countriesContext);
  return (
    <>
      <select
        onChange={(e) => {
          contextObj.setRegion(e.target.value);
        }}
        style={{
          color: `hsl(${contextObj.mood.current[`${contextObj.moodState}`].text
            })`,
          backgroundColor: `hsl(${contextObj.mood.current[`${contextObj.moodState}`].elements
            })`,
        }}
      >
        <option value="all">All regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
};
export default Filters;
