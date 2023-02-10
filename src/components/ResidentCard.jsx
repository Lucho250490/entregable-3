import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/ResidentCard.css";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState();
  useEffect(() => {
    axios
      .get(residentUrl)
      .then((rel) => setResidentInfo(rel.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="residentCard">
      <div className="residentCard__img">
        <img src={residentInfo?.image} alt="image of character" />
      </div>

      <div className="ResidentCard__status">
        <div className={`ResidentCard__circle  ${residentInfo?.status}`}>
          
        </div>

        <h3 className="ResidentCard__text">{residentInfo?.status}</h3>

      </div>

      <section className="residentCard__info">
        <h3 className="residentCard__name">{residentInfo?.name}</h3>

        <hr className="ResidentCard__line"></hr>

        <ul className="residentCard__list">
          <li className="residentCard__item">
            <span>Specie: </span> {residentInfo?.species}
          </li>
          <li className="residentCard__item">
            <span>Origin: </span> {residentInfo?.origin.name}
          </li>
          <li className="residentCard__item">
            <span>Episodes where appear: </span>
            {residentInfo?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
