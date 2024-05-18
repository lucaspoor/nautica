import { FormContacto } from "./formcontacto.tsx";

export default function FormFaqs() {
  return (
    <section className="booking" id="book-now">
      <div className="container flex-start">
        <article className="book-form">
          <div className="book-head">
            <h1>Formulario De Contacto</h1>
            <p>
              ¿Tiene alguna duda? ¡Déjenos ayudarlo! Complete este formulario y
              estaremos encantados de responder a sus consultas.
            </p>
            <img src="./Imgs/decoreGold.png" alt="Img" />
          </div>

          <FormContacto></FormContacto>
        </article>
        <article className="FAQ">
          <div className="book-head">
            <h1>Preguntas Frecuentes</h1>
            <p>
              Explora nuestras preguntas frecuentes, si no encuentras lo que
              buscas, no dudes en ponerte en contacto con nosotros.
            </p>
            <img src="./Imgs/decoreGold.png" alt="Img" />
          </div>
          <article className="FAQ-holder">
            <div className="question-holder">
              <span className="question">
                <span>
                  ¿Puedo ver como funciona la lancha o moto en el agua?
                </span>
              </span>
              <div className="answer">
                <p>
                  Si puedes, Envíanos un mensaje por cualquiera de los medios
                  que estan en la página, para asi poder planear alguna visita
                  para ver la lancha donde podrá incluso ser probada en el agua.
                </p>
              </div>
            </div>
            <div className="question-holder">
              <span className="question">
                <span> ¿Qué documentos debe tener una lancha en Chile?</span>
              </span>
              <div className="answer">
                <p>
                  Para las embarcaciones artesanales se debe presentar:
                  Certificados de matrícula (a su nombre). Certificado de
                  navegabilidad. Certificado de arqueo (sólo si la eslora de la
                  embarcación es de 12 metros o más).
                </p>
              </div>
            </div>
            <div className="question-holder">
              <span className="question">
                <span> ¿Qué licencia se necesita para manejar un bote?</span>
              </span>
              <div className="answer">
                <p>
                  El carnet PNB (Patrón de Navegación Básica) es tu titulación.
                  Este permiso te permitirá navegar hasta 5 millas de la costa
                  en embarcaciones a motor de hasta 8 metros de eslora y sin
                  límite de potencia. La edad mínima para obtener este carné es
                  de 16 años y sirve como carné para motos de agua.
                </p>
              </div>
            </div>
            <div className="question-holder">
              <span className="question">
                <span>¿Qué embarcaciones no necesitan papeles en Chile?</span>
              </span>
              <div className="answer">
                <p>
                  Bajo los 10 HP, o no motorizada menor de 5 mts. de eslora: No
                  requiere inscripción.
                </p>
              </div>
            </div>
          </article>
        </article>
      </div>
    </section>
  );
}
