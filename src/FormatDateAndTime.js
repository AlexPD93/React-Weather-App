import React from "react";

export default function FormatDate(prop) {
  let now = new Date();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];

  let hours = now.getHours();
  if (hours < 10) hours = "0" + now.getHours();

  let minutes = now.getMinutes();
  if (minutes < 10) minutes = "0" + now.getMinutes();

  let date = now.getDate();
  if (date < 10) date = "0" + now.getDate();

  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[now.getMonth()];

  let year = now.getFullYear();

  return (
    <div className="FormatDate">
      <h3>
        <span>{day} </span>
        <span>
          {hours}:{minutes}
        </span>
      </h3>
      <h3>
        {date}/{month}/{year}
      </h3>
    </div>
  );
}
