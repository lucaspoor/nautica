import data from "../data/boats.json";
import { Link } from "react-router-dom";

export default function Products(props) {
  const handleClick = props.manejar;
  return (
    <section className="cards">
      <div className="container mb-5 pb-4">
        <article className="cards-holder">
          {data.map((d) => {
            return (
              <div className="card ">
                <Link to={`/Listadebotes/${d.id}`}>
                  <div className="img">
                    <img src={d.imagen} alt="Boat" />
                  </div>
                  <div className="info flex-between p-3">
                    <a>{d.tittle}</a>
                    <div className="price">
                      <span className="currency">{d.value}</span>
                    </div>
                  </div>

                  <div className="data flex-between p-3">
                    <div className="guest inf">
                      <i class="fa-regular fa-copyright m-1"></i>
                      <span> {d.marca} </span>
                    </div>

                    <div className="guest inf">
                      <i class="fa-solid fa-clock m-1"></i>
                      <span> {d.Horas}</span>
                    </div>

                    <div className="beds inf">
                      <i class="fa-solid fa-calendar-days m-1"></i>
                      <span> {d.año} </span>
                    </div>

                    {d.largo && (
                      <div className="feets inf">
                        <i className="fas fa-arrows-h m-1" />
                        <span>{d.largo}</span>
                      </div>
                    )}

                    <div className="entertain inf">
                      <i className="far fa-columns m-1" />
                      <span>{d.info}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </article>
        <div id="linkubicacion"></div>
      </div>
    </section>
  );
}
