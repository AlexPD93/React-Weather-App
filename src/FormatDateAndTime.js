import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormatDate(props) {
  const [exactTime, setexactTime] = useState({ ready: false });

  useEffect(() => {
    setexactTime(false);
  }, [props.time]);

  function getDay() {
    let date = new Date(props.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function showLiveTime(response) {
    console.log(response);
    setexactTime({
      ready: true,
      currentTime: response.data.datetime.slice(10, 16),
      todayDate: response.data.datetime.slice(8, 10),
      month: response.data.datetime.slice(5, 7),
      year: response.data.datetime.slice(0, 4),
    });
  }

  if (exactTime.ready) {
    return (
      <div className="FormatDate">
        <h3>
          <span>{getDay()} </span>
          <span>{exactTime.currentTime}</span>
        </h3>
        <h3>
          {exactTime.todayDate}/{exactTime.month}/{exactTime.year}
        </h3>
      </div>
    );
  } else {
    let apiKey = `dac344694bff4911a980eb0b3d3c6c11`;
    let apiUrl = `https://timezone.abstractapi.com/v1/current_time?api_key=${apiKey}&location=${props.city}`;
    axios.get(`${apiUrl}`).then(showLiveTime);
    return null;
  }
}
