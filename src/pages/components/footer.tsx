import { HashLink as Link } from "react-router-hash-link";
import data from "../data/boats.json";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="col">
            <a href="#">
              {" "}
              <img src="/imgs/logo-light.png" alt="Logo" />
            </a>
            <p>
              Nos apasiona brindar experiencias incomparables en el agua. Nos
              dedicamos a ofrecer embarcaciones de primera calidad en el centro
              del sur de chile
            </p>
            <h2 className="mt-0 ">¡Ven y conoce nuestras lanchas!</h2>

            <Link smooth to="#linkcontacto" className="confirm ">
              {" "}
              AGENDAR VISITA
            </Link>
          </div>
          <div className="col">
            <h2>Secciones</h2>
            <ul>
              <li>
                <a href="#"> Volver al Inicio</a>
              </li>
              <li>
                <a href="#fleet"> Nuestras Lanchas</a>
              </li>
              <li>
                <a href="#linkinformacion">Información de Nosotros</a>
              </li>

              <li>
                <a href="#">Ver los Testimonios</a>
              </li>
              <li>
                <a href="#linkcontacto">Ir al Contacto</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Nuestras naves</h2>
            <ul>
              {data.map((d) => {
                return (
                  <li>
                    <Link to={`/Listadebotes/${d.id}`}>
                      {" "}
                      <a href="#">{d.tittle}</a>{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h2>Ponte en Contacto</h2>
            <div className="location data">
              <i className="fa-solid fa-location-dot" />
              <span>Camino internacional 363, Pucón, Chile</span>
            </div>
            <div className="mail data">
              <i className="fa-solid fa-envelope" />
              <a href="mailto:support@domain.com">
                carlos.calderon.lanchas@gmail.com
              </a>
            </div>
            <div className="call data">
              <i className="fa-solid fa-headset" />
              <span>Phone:</span>{" "}
              <a href="tel:+56975633454"> +56 9 7563 3454</a>
            </div>
            {/* <div className="social">
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
            </div> */}
            {/* <button className="confirm">CONFIRM BOOKING</button> */}
          </div>
        </div>
      </footer>

      <section className="by-me">
        2024
        <a href="https://www.pooweb.cl/" className="developer">
          {" "}
          PooWeb
        </a>{" "}
        Todos los derechos reservados © .
      </section>
      {/* search div */}
      <div className="search-overLay">
        <div className="input-holder">
          <form action="#">
            <input type="text" placeholder="Type to search" id="search" />
            <i className="fa-solid fa-magnifying-glass" />
          </form>
          <p className="guide">
            Begin typing your search above and press return to search.
          </p>
        </div>
        <button className="close-Overlay">X</button>
      </div>
      {/* search div */}
    </>
  );
}
