import SelectBox from "./selectbox.js";
import News from "./news";
import Testimonies from "./testimonies";
import FormFaqs from "./formfaqs";
import Services from "./services";
import Oferta from "./oferta";
import VideoSection from "./videosection";
import Info from "./info";
import Products from "./Boat";
import React from "react";
import { home } from "../jspelado/home.js";

import { bookingform } from "../jspelado/booking-form.js";
import Landing from "./landing.js";

export default function MainComponent(props) {
  React.useEffect(() => {
    home();

    bookingform();
  }, []);

  const manejar = props.manejar;

  return (
    <>
      {" "}
      <div className="scroll-top flex-center">
        <span>
          <i className="fa-solid fa-arrow-up" />
        </span>
      </div>
      <Landing></Landing>
      <SelectBox></SelectBox>
      <div id="linkinformacion"></div>
      <Info></Info>
      <div id="linklanchas" />
      <section className="fleet" id="fleet">
        <article className="text">
          <h2>
            <span className="bold-head">Explora Nuestras Lanchas </span>
          </h2>

          <p>
            Explora nuevas aguas con nuestras lanchas cuidadosamente
            seleccionadas. Encontramos las mejores embarcaciones para ti,
            ofreciendo calidad y rendimiento excepcionales a precios
            competitivos.
          </p>
          <img src="./Imgs/decoreGold.png" alt="decore" />
        </article>
      </section>
      <Products manejar={manejar} />
      <Oferta></Oferta>
      <FormFaqs></FormFaqs>
      <Testimonies></Testimonies>
    </>
  );
}
