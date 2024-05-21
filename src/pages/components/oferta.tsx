import React from "react";
import { Mapa } from "./Mapa";
export default function Oferta() {
  return (
    <section className="deal ">
      <div className="container">
        <article className="day-deal flex-between">
          <div id="conte" className=" w-100">
            <Mapa />
          </div>
          <article className="deal-content">
            <span className="head">¿Donde Encontarnos?</span>
            <p className="boat-name" style={{ color: "white" }}>
              Ubicación
            </p>
            <p className="boat-data" style={{ color: "white" }}>
              País: Chile | Región: Araucanía | Comuna: Pucón | Dirección:
              Camino internacional 363 | Nos encontramos detras de la Petrobras
              entrando por el camino de tierra.
            </p>
            <i className="fas fa-phone-alt" />
            <span>
              llamar
              <span className="number">
                {" "}
                <a href="tel:+56975633454" style={{ color: "white" }}>
                  +56 9 7563 3454
                </a>
              </span>
            </span>
            <div id="linkcontacto" />
          </article>
        </article>
      </div>
    </section>
  );
}
