import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Weather.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.lat]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="forecast-wrapper">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5)
              return (
                <div className="day-weather" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            else {
              return null;
            }
          })}
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
