import { boatlist } from "../jspelado/boat-list.js";
import React, { useState } from "react";
import info from "../data/boats.json";
import { Link } from "react-router-dom";
import NavBarBootstrap from "../components/BootstrapNav.js";
import Footer from "../components/footer.js";

export default function BoatsPage(props) {
  React.useEffect(() => {
    boatlist();
  }, []);

  return (
    <>
      <NavBarBootstrap />
      <section className="listing one mt-5">
        <div className="container">
          <article className="filters flex-between">
            <span>
              Showing results <span className="from"> 1 </span> to
              <span className="to"> 12 </span> of total 50
            </span>
            <button className="boat-numbers drop-down">
              <span className="selected"></span>
              <ul className="options-list" data-index="0">
                <li selected>24 Boat</li>
                <li>36 Boat</li>
              </ul>
            </button>
            <button className="time drop-down">
              <span className="selected"></span>
              <ul className="options-list" data-index="1">
                <li selected>Last Added</li>
                <li>First Added</li>
              </ul>
            </button>
            <button className="price drop-down">
              <span className="selected"></span>
              <ul className="options-list" data-index="2">
                <li selected>Cheap First</li>
                <li>Expensive First</li>
              </ul>
            </button>
          </article>
          <article className="boats one">
            {info.map((i) => {
              return (
                <div className="col">
                  <div className="img">
                    <img src={i.imagen} alt="Boat" />
                    <i className="fa-solid fa-bars-staggered show-icon"></i>
                  </div>
                  <div className="boat-data">
                    <div className="name flex-between">
                      <span>{i.tittle}</span>
                      <div className="rent-price">
                        <span className="price">$140</span>
                        <span className="duration">/ Per Day</span>
                      </div>
                    </div>
                    <p>
                      Edipisicing eiusmod tempor incididunt labore sed dolore
                      magna aliqa enim ipsum ad minim veniams quis nostrud
                      citation ullam laboris nisi ut aliquip laborisea commodo
                      ...
                    </p>
                    <Link to={`/Listadebotes/${i.id}`}>READ MORE</Link>
                  </div>
                  <div className="details excepcionpadding">
                    <div className="details-head">
                      <h2>GOLDEN ODYSSEY</h2>
                      <span>classNameic Boat</span>
                      <button className="close">X</button>
                    </div>
                    <ul className="boat-feats">
                      <li className="feat flex-between">
                        <span className="name">Make</span>
                        <span className="value">Celebrations</span>
                      </li>
                      <li className="feat flex-between">
                        <span className="name">Engine Model: </span>
                        <span className="value">C32A </span>
                      </li>
                      <li className="feat flex-between">
                        <span className="name">Length</span>
                        <span className="value">110 ft </span>
                      </li>
                      <li className="feat flex-between">
                        <span className="name">Passengers</span>
                        <span className="value">34</span>
                      </li>
                      <li className="feat flex-between">
                        <span className="name">Master Bedroom </span>
                        <span className="value">12</span>
                      </li>
                      <li className="feat flex-between">
                        <span className="name">Gross Weight </span>
                        <span className="value">278,000 lb </span>
                      </li>
                      <li className="feat flex-between">
                        <span className="name">Hull Material </span>
                        <span className="value">Fiberglass</span>
                      </li>
                      <li className="feat flex-between">
                        <span className="name">Draft </span>
                        <span className="value">5.92 ft </span>
                      </li>
                      <li className="feat flex-between">
                        <span className="name">Fuel Capacity </span>
                        <span className="value">6150 Gallons </span>
                      </li>
                      <li className="feat flex-between">
                        <span className="name">Manufacturer </span>
                        <span className="value">Caterpillar </span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </article>
          <div className="page-nums">
            <span>1</span>
            <span className="active">2</span>
            <span>3</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
