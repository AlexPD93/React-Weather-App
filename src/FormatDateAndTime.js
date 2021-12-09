import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormatDate(props) {
  const [exactTime, setexactTime] = useState({ ready: false });

  useEffect(() => {
    setexactTime(false);
  }, [props.time]);

  function showLiveTime(response) {
    console.log(response);
    setexactTime({
      ready: true,
      day: response.data.date_time_wti.slice(0, 3),
      currentTime: response.data.date_time.slice(10, 16),
      todayDate: response.data.date.slice(8, 10),
      month: response.data.date.slice(5, 7),
      year: response.data.date.slice(0, 4),
    });
  }

  if (exactTime.ready) {
    return (
      <div className="FormatDate">
        <h3>
          <span>{exactTime.day} </span>
          <span>{exactTime.currentTime}</span>
        </h3>
        <h3>
          {exactTime.todayDate}/{exactTime.month}/{exactTime.year}
        </h3>
      </div>
    );
  } else {
    let apiKey = `1da0e66d8c6e4cb08f8b2086326b20b6`;
    let apiUrl = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&location=${props.city}`;
    axios.get(`${apiUrl}`).then(showLiveTime);
    return null;
  }
}
