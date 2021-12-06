import React from "react";
import SunEmoji from "./Images/Sun-emoji.png";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let latitude = props.lat;
  let longitude = props.lon;
  let apiKey = `d89a26edf6a0b20551e206f2afd723b2`;
  let units = `units=metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
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
      </div>
    </div>
  );
}
