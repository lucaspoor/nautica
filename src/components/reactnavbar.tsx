import { useState } from "react";
import { Link } from "gatsby";
import React from "react";

export default function ReactNavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <nav className="navbar navbar-expand-lg flex-between reactnav centernav">
        <a href="/">
          <img src="/imgs/logo-light.png" alt="Logo" className="logo mlogo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={showSidebar}
        >
          <span className="fa-solid fa-bars bars-icon burguer burger-icon"></span>
        </button>
        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="navbar-nav  ulnav">
            <Link to="/#" className="list-item abootnav aBootstrap linknav">
              INICIO
            </Link>
            <Link to="/#fleet" className="list-item  aBootstrap linknav">
              NUESTRAS LANCHAS
            </Link>
            <Link
              to="/#linkubicacion"
              className="list-item  aBootstrap linknav"
            >
              UBICACIÓN
            </Link>
            <Link
              to="/#linkcontacto"
              className="list-item  aBootstrap linknav bloque"
            >
              CONTACTO
            </Link>
            <a href="/#linkcontacto"> canguro</a>
          </ul>
        </div>

        <div
          className="collapse test navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto ularreglo">
            <Link to="/#" className="list-item abootnav aBootstrap f ">
              INICIO
            </Link>
            <Link to="/#fleet" className="list-item  aBootstrap f">
              NUESTRAS LANCHAS
            </Link>
            <Link to="/#linkubicacion" className="list-item  aBootstrap f">
              UBICACIÓN
            </Link>
            <Link to="/#linkcontacto" className="list-item  aBootstrap f">
              CONTACTO
            </Link>
          </ul>
          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </nav>
    </div>
  );
}
