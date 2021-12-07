import React from "react";

export default function WeatherForecastDay(props) {
  console.log(props.data.temp.max);
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C/`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div>{day()}</div>
      <div className="weather-image">
        <img className="weather-emojis" alt="Weather icon" src={props.icon} />
      </div>
      <div className="day-temperatures">
        <span className="weather-forecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weather-forecast-temperature-max">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
