export default function Oferta() {
  return (
    <section className="deal ">
      <div className="container">
        <article className="day-deal flex-between">
          <div id="conte" className=" w-100">
            <gmp-map
              center="-39.28743580079332, -71.94501382656382"
              zoom="12"
              map-id="DEMO_MAP_ID"
            >
              <gmp-advanced-marker
                position="-39.28743580079332, -71.94501382656382"
                title="My location"
              ></gmp-advanced-marker>
            </gmp-map>
          </div>
          <article className="deal-content">
            <span className="head">¿Donde Encontarnos?</span>
            <p className="boat-name">Nuestra Ubicación</p>
            <p className="boat-data">
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
