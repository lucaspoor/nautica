import { boatlist } from "../boat-list";
import React, { useState } from "react";
import main from "../main";

export default function BoatsPage(props) {
  React.useEffect(() => {
    boatlist();
  }, []);

  return (
    <>
      <section className="landing diffrent ">
        <div className="container">
          <nav className="flex-between scroll-event">
            <a href="../index.html">
              <img src="../Imgs/logo-light.png" alt="Logo" className="logo" />
            </a>
            <i className="fa-solid fa-bars bars-icon burger-icon"></i>
            <div className="links scroll-event">
              <ul className="main-list">
                <li>
                  <a className="list-item" href="../index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a className="list-item" href="./about-us.html">
                    About Us
                  </a>
                </li>
                <li className="nested">
                  <a className="list-item active" href="#fleet">
                    Our Fleet
                  </a>
                  <ul>
                    <li>
                      <a href="./boat-list1.html">Boats Listing 1</a>
                    </li>
                    <li>
                      <a href="./boat-list2.html">Boats Listing 2</a>
                    </li>
                    <li>
                      <a href="./boat-details.html">Boats Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nested">
                  <a className="list-item" href="#">
                    Our Tours
                  </a>
                  <ul>
                    <li>
                      <a href="./Our-tours.html">Tours Listing</a>
                    </li>
                    <li>
                      <a href="./tour-details.html">Tours Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nested">
                  <a className="list-item" href="#news">
                    News
                  </a>
                  <ul>
                    <li>
                      <a href="./main-blog.html">Blog Main</a>
                    </li>
                    <li>
                      <a href="./grid-blog.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="./post-details.html">Blog Post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="list-item" href="./contact-us.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="form">
              <i
                className="fa-solid fa-magnifying-glass search"
                id="search"
              ></i>
              <a href="#book-now" className="book main">
                BOOK NOW
              </a>
            </div>
          </nav>
          <div className="page-name">
            <h2>OUR FLEET</h2>
            <span>
              <a href="html/index.html"> Home</a>{" "}
            </span>
            <i className="fa-solid fa-angles-right"></i>
            <span>
              <a href="boat-details.html"> Our Fleet</a>{" "}
            </span>
            <i className="fa-solid fa-angles-right"></i>
            <span>Boat List</span>
          </div>
        </div>
        <div className="styling blue"></div>
      </section>
      <section className="listing one">
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
            <div className="col">
              <div className="img">
                <img src="../Imgs/bl11.jpg" alt="Boat" />
                <i className="fa-solid fa-bars-staggered show-icon"></i>
              </div>
              <div className="boat-data">
                <div className="name flex-between">
                  <span>GOLDEN ODYSSEY</span>
                  <div className="rent-price">
                    <span className="price">$140</span>
                    <span className="duration">/ Per Day</span>
                  </div>
                </div>
                <p>
                  Edipisicing eiusmod tempor incididunt labore sed dolore magna
                  aliqa enim ipsum ad minim veniams quis nostrud citation ullam
                  laboris nisi ut aliquip laborisea commodo ...
                </p>
                <a href="#">READ MORE</a>
              </div>
              <div className="details">
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
            <div className="col">
              <div className="img">
                <img src="../Imgs/bl12.jpg" alt="Boat" />
                <i className="fa-solid fa-bars-staggered show-icon"></i>
              </div>
              <div className="boat-data">
                <div className="name flex-between">
                  <span>Black Pearl</span>
                  <div className="rent-price">
                    <span className="price">$140</span>
                    <span className="duration">/ Per Day</span>
                  </div>
                </div>
                <p>
                  Edipisicing eiusmod tempor incididunt labore sed dolore magna
                  aliqa enim ipsum ad minim veniams quis nostrud citation ullam
                  laboris nisi ut aliquip laborisea commodo ...
                </p>
                <a href="#">READ MORE</a>
              </div>
              <div className="details">
                <div className="details-head">
                  <h2>Black Pearl</h2>
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
            <div className="col">
              <div className="img">
                <img src="../Imgs/bl13.jpg" alt="Boat" />
                <i className="fa-solid fa-bars-staggered show-icon"></i>
              </div>
              <div className="boat-data">
                <div className="name flex-between">
                  <span>Sea Senora</span>
                  <div className="rent-price">
                    <span className="price">$140</span>
                    <span className="duration">/ Per Day</span>
                  </div>
                </div>
                <p>
                  Edipisicing eiusmod tempor incididunt labore sed dolore magna
                  aliqa enim ipsum ad minim veniams quis nostrud citation ullam
                  laboris nisi ut aliquip laborisea commodo ...
                </p>
                <a href="#">READ MORE</a>
              </div>
              <div className="details">
                <div className="details-head">
                  <h2>Sea Senora</h2>
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
            <div className="col">
              <div className="img">
                <img src="../Imgs/bl14.jpg" alt="Boat" />
                <i className="fa-solid fa-bars-staggered show-icon"></i>
              </div>
              <div className="boat-data">
                <div className="name flex-between">
                  <span>FISH TALES</span>
                  <div className="rent-price">
                    <span className="price">$140</span>
                    <span className="duration">/ Per Day</span>
                  </div>
                </div>
                <p>
                  Edipisicing eiusmod tempor incididunt labore sed dolore magna
                  aliqa enim ipsum ad minim veniams quis nostrud citation ullam
                  laboris nisi ut aliquip laborisea commodo ...
                </p>
                <a href="#">READ MORE</a>
              </div>
              <div className="details">
                <div className="details-head">
                  <h2>FISH TALES</h2>
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
            <div className="col">
              <div className="img">
                <img src="../Imgs/bl15.jpg" alt="Boat" />
                <i className="fa-solid fa-bars-staggered show-icon"></i>
              </div>
              <div className="boat-data">
                <div className="name flex-between">
                  <span>ISLAND TIME</span>
                  <div className="rent-price">
                    <span className="price">$140</span>
                    <span className="duration">/ Per Day</span>
                  </div>
                </div>
                <p>
                  Edipisicing eiusmod tempor incididunt labore sed dolore magna
                  aliqa enim ipsum ad minim veniams quis nostrud citation ullam
                  laboris nisi ut aliquip laborisea commodo ...
                </p>
                <a href="#">READ MORE</a>
              </div>
              <div className="details">
                <div className="details-head">
                  <h2>ISLAND TIME</h2>
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
            <div className="col">
              <div className="img">
                <img src="../Imgs/bl16.jpg" alt="Boat" />
                <i className="fa-solid fa-bars-staggered show-icon"></i>
              </div>
              <div className="boat-data">
                <div className="name flex-between">
                  <span>FAST SERENITY</span>
                  <div className="rent-price">
                    <span className="price">$140</span>
                    <span className="duration">/ Per Day</span>
                  </div>
                </div>
                <p>
                  Edipisicing eiusmod tempor incididunt labore sed dolore magna
                  aliqa enim ipsum ad minim veniams quis nostrud citation ullam
                  laboris nisi ut aliquip laborisea commodo ...
                </p>
                <a href="#">READ MORE</a>
              </div>
              <div className="details">
                <div className="details-head">
                  <h2>FAST SERENITY</h2>
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
          </article>
          <div className="page-nums">
            <span>1</span>
            <span className="active">2</span>
            <span>3</span>
          </div>
        </div>
      </section>
    </>
  );
}
