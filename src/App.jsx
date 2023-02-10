import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import Pagination from "./components/Pagination";
import ResidentCard from "./components/ResidentCard";
import ResidentHeader from "./components/ResidentHeader";
import ResidentsList from "./components/ResidentsList";
import getRandomNumber from "./utils/getRandomNumber";
import { numbersPages } from "./utils/numbersPages";

const RESIDENTS_PERPAGE = 12;

function App() {
  const [location, setLocation] = useState();
  const [nameLocation, setNameLocation] = useState("");
  const [page, setPage] = useState(1);

  const newPage = () => {
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidentPerpage = location?.residents.slice(minLimit, maxLimit);
    return newResidentPerpage;
  };

  useEffect(() => {
    setPage(1);
    const dimesion = nameLocation === "" ? getRandomNumber(126) : nameLocation;
    const url = `https://rickandmortyapi.com/api/location/${dimesion}`;

    axios
      .get(url)
      .then((rel) => setLocation(rel.data))
      .catch((err) => console.log(err));
  }, [nameLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameLocation(e.target.idlocation.value);
  };

  return (
    <div className="App">
      <ResidentHeader handleSubmit = {handleSubmit}/>
     
      <Pagination numbersPages={numbersPages} setPage={setPage} />

      <Pagination location = {location} RESIDENTS_PERPAGE = {RESIDENTS_PERPAGE}  setPage={setPage} />

      <Location location={location} />


      <ResidentsList newPage={newPage} />

      <Pagination location = {location} RESIDENTS_PERPAGE = {RESIDENTS_PERPAGE}  setPage={setPage} />
    </div>
  );
}

export default App;
