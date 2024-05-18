import { HashLink as Link } from "react-router-hash-link";

export default function SelectBox() {
  return (
    <section className="select flex-between p-5 col-lg-8 ">
      <article className="text col-lg-8 ">
        <h1 className="mt-0">
          <span className="bold-head">¿Quieres Contactarnos? </span>
        </h1>

        <p>
          Haz click en el boton amarillo para ir al formulario de contacto y
          hácenos llegar tu mensaje, dudas o consultas ¡Que estas esperando es
          gratis!
        </p>
      </article>

      <Link smooth to="#linkcontacto" className="main search p-4 ">
        {" "}
        Ir al Contacto
      </Link>
    </section>
  );
}
