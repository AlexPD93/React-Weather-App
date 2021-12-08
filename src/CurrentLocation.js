import React from "react";

export default function CurrentLocation() {
  function getCurrentLocation(event) {
    event.preventDefault();
  }

  return (
    <div className="CurrentLocation">
      <div id="current-location">
        <a className="current-location" onClick={getCurrentLocation} href="/">
          Current Location
        </a>
      </div>
    </div>
  );
}
