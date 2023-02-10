import React from "react";
import { numbersPages } from "../utils/numbersPages";
import "./styles/ResidentPagination.css"

const Pagination = ({ setPage, location, RESIDENTS_PERPAGE }) => {
  return (
    <ul className ="Resident__pagination" >
      {numbersPages(location, RESIDENTS_PERPAGE).map((numberPage) => (
        <li className="active" onClick = {() => setPage(numberPage)} key ={numberPage} >
          {numberPage}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
