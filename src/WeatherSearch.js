import axios from "axios";
import React, { useState } from "react";
import FormatDateAndTime from "./FormatDateAndTime";
import Temperature from "./Temperature";
import CurrentLocation from "./CurrentLocation";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather() {
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="src/style.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>;

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      time: response.data.dt,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `d89a26edf6a0b20551e206f2afd723b2`;
    let units = `units=metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${units}`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="temperature-text-wrapper">
            <div className="change-city-text">
              Change city
              <form className="change-city-form" onSubmit={handleSubmit}>
                <input
                  className="city-input"
                  type="search"
                  autoFocus="off"
                  placeholder="Type a city..."
                  onChange={updateCity}
                />
              </form>
              <FormatDateAndTime time={weather.time} />
              <h4 className="weatherDescription">{weather.description}</h4>
              <CurrentLocation icon={weather.icon} />
            </div>
          </div>
          <h1>
            {" "}
            <span>{weather.city}</span> <span>{weather.country}</span>{" "}
          </h1>
          <Temperature celcius={weather.temperature} icon={weather.icon} />
          <WeatherForecast
            lat={weather.lat}
            lon={weather.lon}
            icon={weather.icon}
          />
          <footer className="footer">
            Coded by Alexander Perez-Davies ||{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="footer-link"
              href="https://github.com/AlexPD93/React-Weather-App"
            >
              Open-sourced on Github
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="temperature-text-wrapper">
          <div className="initial-change-city-text">
            Search a city!
            <form className="change-city-form" onSubmit={handleSubmit}>
              <input
                className="initial-city-input"
                type="search"
                autoFocus="off"
                placeholder="Type a city..."
                onChange={updateCity}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
