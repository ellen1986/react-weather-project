import React from "react";
import Weather from "./Weather";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Edinburgh" />
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
          </a>{" "}
          and{" "}
          <a
            href="https://festive-williams-838308.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
