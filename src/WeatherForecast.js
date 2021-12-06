import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="forecast-wrapper">
          <div class="day-weather">
            <WeatherForecastDay
              maxTemp={forecast[0].temp.max}
              minTemp={forecast[0].temp.min}
              day={forecast[0].dt}
              icon={props.icon}
            />{" "}
          </div>
          <div class="day-weather">
            <WeatherForecastDay
              maxTemp={forecast[1].temp.max}
              minTemp={forecast[1].temp.min}
              day={forecast[1].dt}
              icon={props.icon}
            />{" "}
          </div>
          <div class="day-weather">
            <WeatherForecastDay
              maxTemp={forecast[2].temp.max}
              minTemp={forecast[2].temp.min}
              day={forecast[2].dt}
              icon={props.icon}
            />{" "}
          </div>
          <div class="day-weather">
            <WeatherForecastDay
              maxTemp={forecast[3].temp.max}
              minTemp={forecast[3].temp.min}
              day={forecast[3].dt}
              icon={props.icon}
            />{" "}
          </div>
          <div class="day-weather">
            <WeatherForecastDay
              maxTemp={forecast[4].temp.max}
              minTemp={forecast[4].temp.min}
              day={forecast[4].dt}
              icon={props.icon}
            />{" "}
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.lat;
    let longitude = props.lon;
    let apiKey = `d89a26edf6a0b20551e206f2afd723b2`;
    let units = `units=metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&${units}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
