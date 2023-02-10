import React from "react";

import "./styles/ResidentsHeader.css";

const ResidentHeader = ({ handleSubmit }) => {
  return (
    <div className="ResidentHeader">
      <img
        src="/imag/image3.svg"
        alt=""
        className="ResidentHeader__img"
      />

      <img
        src="/imag/image2.svg"
        alt=""
        className="ResidentHeader__img"
      />
      <form className="ResidentForm" onSubmit={handleSubmit}>
        <input
          className="ResidentForm__search"
          type="text"
          id="idlocation"
          placeholder="type location id"
        />
        <button className="ResidentForm__button"> Search </button>
      </form>
    </div>
  );
};

export default ResidentHeader;
