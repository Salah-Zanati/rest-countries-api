import { useContext, useRef, useState } from "react";
import { countriesContext } from "../App";
import { Link } from "react-router-dom";

const Search = ({ data, setCountryDetails }) => {
  const [input, setInput] = useState("");

  const contextObj = useContext(countriesContext);
  const searchInputRef = useRef();
  const getCountryByName = (name, data) => {
    return (
      data &&
      data.map(
        (country) =>
          country.name.common.toUpperCase().startsWith(name.toUpperCase()) && (
            <Link
              to={"name/" + country.name.common}
              key={country.name.common}
              style={{
                backgroundColor: `hsl(${
                  contextObj.mood.current[`${contextObj.moodState}`].elements
                })`,
                color: `hsl(${
                  contextObj.mood.current[`${contextObj.moodState}`].text
                })`,
                "--li-hov": `hsl(${
                  contextObj.mood.current[`${contextObj.moodState}`].alt
                })`,
              }}
            >
              <img src={country.flags.png} alt="Flag" />
              <span>{country.name.common}</span>
            </Link>
          )
      )
    );
  };

  return (
    <div className="search">
      <div>
        <ion-icon
          name="search-outline"
          style={{
            color: `hsl(${
              contextObj.mood.current[`${contextObj.moodState}`].text
            })`,
          }}
        ></ion-icon>
        <input
          id="searchInput"
          type="text"
          placeholder="Search for a country..."
          ref={searchInputRef}
          style={{
            backgroundColor: `hsl(${
              contextObj.mood.current[`${contextObj.moodState}`].elements
            })`,
            color: `hsl(${
              contextObj.mood.current[`${contextObj.moodState}`].text
            })`,
            "--ph-color": `hsl(${
              contextObj.mood.current[`${contextObj.moodState}`].text
            })`,
          }}
          onChange={(e) => {
            setInput(e.target.value);
            document.getElementById("resultList").style.display = "flex";
          }}
          onFocus={(e) => {
            setInput(e.target.value);
            document.getElementById("resultList").style.display = "flex";
          }}
          onBlur={() => {
            setTimeout(() => {
              if (document.getElementById("resultList")) {
                document.getElementById("resultList").style.display = "none";
              }
            }, 200);
          }}
        />
      </div>
      <ul id="resultList" className="resultList">
        {getCountryByName(input, data)}
      </ul>
    </div>
  );
};

export default Search;
