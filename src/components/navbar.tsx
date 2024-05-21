import React from "react";
export default function NavBar() {
  return (
    <nav className="flex-between scroll-event">
      <a href="#linkinicio">
        <img src="/imgs/logo-light.png" alt="Logo" className="logo" />
      </a>
      <i className="fa-solid fa-bars bars-icon burger-icon" />
      <div className="links scroll-event">
        <ul className="main-list ularreglo" style={{ paddingLeft: "0" }}>
          <li>
            <a className="list-item active" href="#linkinicio">
              Inicio
            </a>
          </li>

          <li>
            <a className="list-item" href="#fleet">
              Nuestras Lanchas
            </a>
          </li>

          <li>
            <a className="list-item" href="#linkubicacion">
              Ubicación
            </a>
          </li>
          <li>
            <a className="list-item" href="#linkcontacto">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
