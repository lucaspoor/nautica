import main from "../jspelado/main";
import NavBar from "./navbar";
import { HashLink as Link } from "react-router-hash-link";

export default function Landing() {
  return (
    <section className="landing">
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
            <Link smooth to="#linklanchas" className="explore">
              Explorar Ahora{" "}
            </Link>
          </article>
          <article className="textbox">
            <span>Recorre Las Aguas </span>
            <p>
              Las Más Confiables <br />
              <span className="dark">Lanchas</span> De Pucón
            </p>
            <Link smooth to="#linklanchas" className="explore">
              Ver Lanchas{" "}
            </Link>
          </article>
        </section>
        <i className="fa-solid fa-chevron-right angles" />
        <i className="fa-solid fa-chevron-left angles" />
      </div>
    </section>
  );
}
