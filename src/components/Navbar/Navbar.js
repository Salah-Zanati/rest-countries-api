/** @format */
import styles from "./Navbar.module.css";
import React, { useContext } from "react";
import { countriesContext } from "../../App";
const Navbar = ({ moodState }) => {
  const contextObj = useContext(countriesContext);
  return (
    <div
      className={styles.navbar}
      style={{
        backgroundColor: `hsl(${
          contextObj.mood.current[`${contextObj.moodState}`].elements
        })`,
      }}
    >
      <div className="container">
        <p>Where in the world?</p>
        <div
          className={styles.designMood}
          style={{
            color: `hsl(${
              contextObj.mood.current[`${contextObj.moodState}`].text
            })`,
          }}
        >
          <div
            onClick={() => {
              contextObj.setMoodState(
                contextObj.moodState === "dark" ? "light" : "dark"
              );
              console.log(contextObj.moodState);
            }}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            {contextObj.moodState === "dark" ? (
              <>
                <ion-icon
                  name="moon-outline"
                  style={{ marginBottom: "3px" }}
                ></ion-icon>
                <p>Dark Mood</p>
              </>
            ) : (
              <>
                <ion-icon
                  name="sunny-outline"
                  style={{ marginBottom: "3px" }}
                ></ion-icon>
                <p>Light Mood</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
