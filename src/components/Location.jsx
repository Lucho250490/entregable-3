import React from "react";
import "./styles/ResidentLocation.css"

const Location = ({ location }) => {
  return (
    <section className="location">
      <h2 className="location__name">{location?.name}</h2>
      <ul className="location__list">
        <li className="location__item">
          <span>Type: </span> {location?.type}
        </li>
        <li location__item>
          <span>Dimensión:</span> {location?.dimension}
        </li>
        <li className="location__item">
          <span>Populatión: </span> {location?.residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
