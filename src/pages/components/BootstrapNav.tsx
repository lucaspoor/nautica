import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";

function NavBarBootstrap() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={scroll ? "claro p-4" : "blue p-4"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            className="logo"
            src={scroll ? "/Imgs/logo-dark.png" : "/Imgs/logo-light.png"}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle className="border-0 ">
          <i className="fa-solid fa-bars bars-icon burger-icon text-white sizeBurguer"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" bootnav" style={{ width: "100%" }}>
            <NavHashLink
              to="/#linkcontacto"
              className="list-item abootnav aBootstrap"
            >
              INICIO
            </NavHashLink>
            <NavHashLink to="/#linkcontacto" className="list-item  aBootstrap">
              NUESTRAS LANCHAS
            </NavHashLink>
            <NavHashLink to="/#linkcontacto" className="list-item  aBootstrap">
              UBICACIÓN
            </NavHashLink>
            <NavHashLink to="/#linkcontacto" className="list-item  aBootstrap">
              CONTACTO
            </NavHashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBootstrap;
