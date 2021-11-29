import React from "react";
import SunEmoji from "./Images/Sun-emoji.png";
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
  return (
    <div className="Weather">
      <div className="container">
        <div className="temperature-text-wrapper">
          <div className="change-city-text">
            Change city
            <form className="change-city-form">
              <input
                className="city-input"
                type="text"
                autofocus="off"
                placeholder="Type a city..."
              />
            </form>
            <h3>
              <span id="day">Wed </span>
              <span id="time">22:01</span>
            </h3>
            <h3>24/11/21</h3>
            <h4>Sunny</h4>
            <div>
              <a className="current-location" href="/">
                Current Location
              </a>
            </div>
          </div>
        </div>
        <h1>
          {" "}
          <span>Oaxaca</span> <span>Oax</span>{" "}
        </h1>
        <div className="current-day-wrapper">
          <h2>20</h2>
          <div className="temp-measurement-celcius">
            <a className="celcius-temp" href="/">
              °C
            </a>
          </div>
          <div className="temp-measurement-fahren">
            <a className="fahren-temp remove-underline" href="/">
              °F
            </a>
          </div>
          <div className="main-weather-emoji-div">
            <img
              className="main-weather-emoji"
              src={SunEmoji}
              alt="Main weather emoji"
              id="icon"
            />
          </div>
        </div>
        <div className="forecast-wrapper">
          <div class="day-weather">
            <div>Mon</div>
            <div class="weather-image">
              <img class="weather-emojis" alt="Sun emoji" src={SunEmoji} />
            </div>
            <div class="day-temperatures">
              <span class="weather-forecast-temperature-max">10/</span>
              <span class="weather-forecast-temperature-max">5</span>
            </div>
          </div>
          <div class="day-weather">
            <div>Tue</div>
            <div class="weather-image">
              <img class="weather-emojis" alt="Sun emoji" src={SunEmoji} />
            </div>
            <div class="day-temperatures">
              <span class="weather-forecast-temperature-max">10/</span>
              <span class="weather-forecast-temperature-max">5</span>
            </div>
          </div>
          <div class="day-weather">
            <div>Wed</div>
            <div class="weather-image">
              <img class="weather-emojis" alt="Sun emoji" src={SunEmoji} />
            </div>
            <div class="day-temperatures">
              <span class="weather-forecast-temperature-max">10/</span>
              <span class="weather-forecast-temperature-max">5</span>
            </div>
          </div>
          <div class="day-weather">
            <div>Thu</div>
            <div class="weather-image">
              <img class="weather-emojis" alt="Sun emoji" src={SunEmoji} />
            </div>
            <div class="day-temperatures">
              <span class="weather-forecast-temperature-max">10/</span>
              <span class="weather-forecast-temperature-max">5</span>
            </div>
          </div>
          <div class="day-weather">
            <div>Fri</div>
            <div class="weather-image">
              <img class="weather-emojis" alt="Sun emoji" src={SunEmoji} />
            </div>
            <div class="day-temperatures">
              <span class="weather-forecast-temperature-max">10/</span>
              <span class="weather-forecast-temperature-max">5</span>
            </div>
          </div>
        </div>
        <footer className="footer">
          Coded by Alexander Perez-Davies ||{" "}
          <a
            target="_blank"
            rel="noreferrer"
            class="footer-link"
            href="https://github.com/AlexPD93/my-weather-app"
          >
            Open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
