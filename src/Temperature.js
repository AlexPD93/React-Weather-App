import React, { useState } from "react";
import "./Weather.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheitTemperature() {
    return Math.round((props.celcius * 9) / 5 + 32);
  }

  if (unit === "celcius") {
    return (
      <div className="current-day-wrapper">
        <h2>{props.celcius}</h2>
        <div className="temp-measurement-celcius">
          <p className="celcius-temp underline" href="/">
            °C
          </p>
        </div>
        <div className="temp-measurement-fahren">
          <a
            className="fahren-temp remove-underline"
            onClick={showFahrenheit}
            href="/"
          >
            °F
          </a>
        </div>
        <div className="main-weather-emoji-div">
          <img
            className="main-weather-emoji"
            src={props.icon}
            alt="Weather icon"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="current-day-wrapper">
        <h2>{fahrenheitTemperature()}</h2>
        <div className="temp-measurement-celcius">
          <a
            className="celcius-temp remove-underline"
            onClick={showCelcius}
            href="/"
          >
            °C
          </a>
        </div>
        <div className="temp-measurement-fahren">
          <p className="fahren-temp underline" href="/">
            °F
          </p>
        </div>
        <div className="main-weather-emoji-div">
          <img
            className="main-weather-emoji"
            src={props.icon}
            alt="Weather icon"
          />
        </div>
      </div>
    );
  }
}
