import { useState } from "react";
import "./styles/Modal.css";
export const Modal = (el) => {
  const cities = ["Helsinki", "Turku", "Vaasa", "Oulu"];
  const [countA, setCountA] = useState(0);
  const [countC, setCountC] = useState(0);
  const handleClickA = () => {
    document.querySelector(".A").classList.remove("d-none");
    document.querySelector(".C").classList.add("d-none");
  };
  const handleClickC = () => {
    document.querySelector(".C").classList.remove("d-none");
    document.querySelector(".A").classList.add("d-none");
  };
  return (
    <div id="openModal" className="modalDialog">
      <div>
        <nav className="modalNav">
          <button onClick={handleClickA}>
            <h3>Location</h3>
            <p>{el.tit}, Finland</p>
          </button>
          <button onClick={handleClickC}>
            <h3>Guests</h3>
            <p>{el.titFug}</p>
          </button>
          <a href="#close" title="Close" className="sear">
            <i className="material-symbols-outlined">search</i>Search
          </a>
          <a href="#close" title="Close" className="close"></a>
        </nav>
        <div className="cities A">
          {cities.map((city, key) => {
            return (
              <button onClick={() => el.fu(city)} key={key}>
                <span className="material-symbols-outlined">location_on</span>
                {city}, Finland
              </button>
            );
          })}
        </div>
        <div className="modalGuest C">
          <div className="ages">
            <h3>Adult</h3>
            <p>Age 13 or above</p>
            <div className="count">
              <button onClick={() => {setCountA(countA - 1)
              el.fug(el.titFug-1)}}>-</button>
              <p>{countA}</p>
              <button onClick={() => {setCountA(countA + 1)
              el.fug(el.titFug+1)}}>+</button>
            </div>
          </div>
          <div className="ages">
            <h3>Children</h3>
            <p>Age 2-12</p>
            <div className="count">
              <button onClick={() => {setCountC(countC - 1)
              el.fug(el.titFug-1)}}>-</button>
              <p>{countC}</p>
              <button onClick={() => {setCountC(countC + 1)
              el.fug(el.titFug+1)}}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
