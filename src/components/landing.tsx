import React from "react";
import NavBar from "./navbar";

export default function Landing() {
  return (
    <section className="landing">
      <div id="linkinicio"></div>
      <div className="container">
        <NavBar></NavBar>

        <section className="textbox-holder">
          <article className="textbox ">
            <span>Vive Un Sueño </span>
            <p>
              Navega y Disfruta
              <br />
              <span className="lux">Inicia </span> Con Nosotros
            </p>
            <a href="#linklanchas" className="explore">
              Explorar Ahora{" "}
            </a>
          </article>
          <article className="textbox">
            <span>Recorre Las Aguas </span>
            <p>
              Las Más Confiables <br />
              <span className="dark">Lanchas</span> De Pucón
            </p>
            <a href="#linklanchas" className="explore">
              Ver Lanchas{" "}
            </a>
          </article>
        </section>
        <i className="fa-solid fa-chevron-right angles" />
        <i className="fa-solid fa-chevron-left angles" />
      </div>
    </section>
  );
}
