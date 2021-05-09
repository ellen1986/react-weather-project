import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a href="https://yahoo.com/" target="_blank" rel="noreferrer">
            Ellen Nimako
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ellen1986/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on github
          </a>
        </footer>
        <Weather defaultCity="Edinburgh" />
      </div>
    </div>
  );
}
