import Carousel from "react-bootstrap/Carousel";
import { boatsinfo } from "../data/boatdetails.js";

export default function BoatDetails() {
  return (
    <>
      <>
        <section className="landing diffrent">
          <div className="container">
            <nav className="flex-between scroll-event">
              <a href="../index.html">
                <img src="../Imgs/logo-light.png" alt="Logo" className="logo" />
              </a>
              <i className="fa-solid fa-bars bars-icon burger-icon" />
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
                />
                <a href="#book-now" className="book main">
                  BOOK NOW
                </a>
              </div>
            </nav>
            <div className="page-name">
              <h2>OUR FLEET</h2>
              <span>
                <a href="html/index.html"> Home </a>
              </span>
              <i className="fa-solid fa-angles-right" />
              <span>
                <a href="boat-details.html"> Our Fleet </a>
              </span>
              <i className="fa-solid fa-angles-right" />
              <span>Boat Details</span>
            </div>
          </div>
          <div className="styling blue" />
        </section>
        <section className="details">
          <div className="container flex-start">
            <article className="features">
              <Carousel>
                {boatsinfo.map((i) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={i.img}
                        alt="slide"
                        key={i.id}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
              <div className="pics-holder">
                <div className="pics-slider flex-between" id="pics-slider">
                  {boatsinfo.map((i) => {
                    return (
                      <img
                        className="slide-item"
                        src={i.img}
                        alt="Img"
                        key={i.id}
                      />
                    );
                  })}
                </div>
              </div>
              <article className="boat-specific">
                <h3>Especificaciones técnicas</h3>
                <div className="Specifications">
                  <div className="feat">
                    <span className="key">Ubicación:</span>
                    <span className="value">Pucón, IX Araucanía </span>
                  </div>
                  <div className="feat">
                    <span className="key">Publicado:</span>
                    <span className="value">19/02/2024</span>
                  </div>
                  <div className="feat">
                    <span className="key"></span>
                    <span className="value">Caterpillar</span>
                  </div>
                  <div className="feat">
                    <span className="key">Engine Model:</span>
                    <span className="value">C32A</span>
                  </div>
                  <div className="feat">
                    <span className="key">Draft:</span>
                    <span className="value">5.92 ft</span>
                  </div>
                  <div className="feat">
                    <span className="key">Max Speed:</span>
                    <span className="value">120</span>
                  </div>
                  <div className="feat">
                    <span className="key">Length:</span>
                    <span className="value">110 ft</span>
                  </div>
                  <div className="feat">
                    <span className="key">Fuel Capacity:</span>
                    <span className="value">6150 Gallons</span>
                  </div>
                  <div className="feat">
                    <span className="key">Passengers:</span>
                    <span className="value">12</span>
                  </div>
                  <div className="feat">
                    <span className="key">Gross Weight:</span>
                    <span className="value">278,000 lb</span>
                  </div>
                  <div className="feat">
                    <span className="key">Fuel Type:</span>
                    <span className="value">Diesel</span>
                  </div>
                  <div className="feat">
                    <span className="key">Master Bedroom:</span>
                    <span className="value">3</span>
                  </div>
                </div>
                <div className="datails-nav">
                  <ul className="nav flex-between">
                    <li className="OverView active">Overview</li>
                    <li className="Features-Services">
                      Features &amp; Services
                    </li>
                    <li className="Reviews">Reviews</li>
                  </ul>
                </div>
                <div className="">
                  <div>
                    <p>
                      Edipisicing eiusmod tempor incididunt labore sed dolore
                      magna aliqa enim ipsum ad minim veniams quis nostrud
                      citation ullam laboris nisi ut aliquip laboris nisi ut
                      aliquip ex ea commodo. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h4>Highlights of the new services</h4>
                    <p>
                      <span>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris
                      </span>
                      nisi ut aliquip ex ea commodo cons equat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Exe pteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum. Sed umt perspiciatis unde
                      omnis iste natus error sit voluptatem accusantium
                      doloremque.
                    </p>
                  </div>
                  <div className="features-click item">
                    <ul className="features flex-between">
                      <li>Enim ipsum ad minim veniams quis</li>
                      <li>Ut enim ad minim veniam quis</li>
                      <li>Reprehenderit in voluptate velit esse</li>
                      <li>Consectetur adipisicing elit</li>
                      <li>Laboris nisi ut aliquip ex e comodo</li>
                      <li>Enim ipsum ad minim veniams quis</li>
                      <li>Ut enim ad minim veniam quis</li>
                      <li>Consectetur adipisicing elit</li>
                      <li>Laboris nisi ut aliquip ex e comodo</li>
                      <li>Enim ipsum ad minim veniams quis</li>
                      <li>Ut enim ad minim veniam quis</li>
                      <li>Reprehenderit in voluptate velit esse</li>
                      <li>Consectetur adipisicing elit</li>
                      <li>Laboris nisi ut aliquip ex e comodo</li>
                    </ul>
                  </div>
                  <div className="reviews-click item">
                    <div className="review one">
                      <h4>Johannes Kepler</h4>
                      <span>24 Sep 2019</span>
                      <ul className="stars">
                        <li className="clicked">
                          <i className="fa-solid fa-star" />
                        </li>
                        <li className="clicked">
                          <i className="fa-solid fa-star" />
                        </li>
                        <li className="clicked">
                          <i className="fa-solid fa-star" />
                        </li>
                        <li className="clicked">
                          <i className="fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-solid fa-star" />
                        </li>
                      </ul>
                      <p>
                        Duis ante magna, aliquet sit amet sagittis vitae,
                        tristique at lacus. Ut et accumsan turpis. Phasellus
                        ornare, tortor ut congue imperdiet, mauris magna
                        condimentum nulla, non malesuada mauris massa eu augue.
                      </p>
                    </div>
                    <div className="review two">
                      <h4>Ruben Chapman</h4>
                      <span>19 Dec 2019</span>
                      <ul className="stars">
                        <li className="clicked">
                          <i className="fa-solid fa-star" />
                        </li>
                        <li className="clicked">
                          <i className="fa-solid fa-star" />
                        </li>
                        <li className="clicked">
                          <i className="fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-solid fa-star" />
                        </li>
                        <li>
                          <i className="fa-solid fa-star" />
                        </li>
                      </ul>
                      <p>
                        Proin non ultricies mauris, non varius massa. Maecenas
                        tempus risus ut erat blandit fermentum. Praesent commodo
                        quam non lacus interdum semper et ut enim. Donec vel
                        suscipit nulla. Nullam imperdiet nisl in lectus porta
                        sodales. Curabitur consequat dui nec eleifend tempor.
                        Pellentesque elementum blandit interdum.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </article>
            <article className="seller-info">
              <div className="price">
                <div className="holder">
                  <h2>$ 42.200.000 </h2>
                </div>
                <div className="payment">
                  <img src="../Imgs/payment-icon_02.png" alt="Payment" />
                  <p>Included Taxes &amp; Checkup*</p>
                </div>
              </div>
              <div className="seller-data">
                <div className="name flex-between">
                  <img src="../Imgs/yteam001.jpg" alt="Seller" />
                  <div className="data">
                    <span className="seller-name">Carlos Calderón</span>
                    <span className="Membership">Dueño NauticaCalderon</span>
                  </div>
                </div>
                <div className="number-social">
                  <span className="contact">Número de contacto </span>
                  <span>
                    <a href="tel:+1 (258) 403 7961" className="number">
                      1 (258) 403 7961
                    </a>
                  </span>
                  <div className="social">
                    <a href="#">
                      {" "}
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="#">
                      {" "}
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-seller">
                <h3>Mensaje al vendedor</h3>
                <form action="#">
                  <input
                    type="text"
                    name="name"
                    id="client-name"
                    placeholder="Nombre"
                    required=""
                  />
                  <textarea
                    name="message"
                    id="message"
                    rows={10}
                    placeholder="Deja Tu Mensaje"
                    required=""
                    defaultValue={""}
                  />
                  <input
                    type="submit"
                    defaultValue="Send Message Now"
                    id="send-message"
                  />
                </form>
              </div>
            </article>
          </div>
        </section>
      </>
    </>
  );
}
