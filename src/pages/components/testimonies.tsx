import React from "react";
export default function Testimonies() {
  return (
    <section className="people-says" style={{ display: "none" }}>
      <div className="head">
        <h2>Que opinan nuestros clientes</h2>
        <img src="/imgs/decoreGold.png" alt="img" />
      </div>
      <article className="reviews-container">
        <div className="slider">
          <div className="review">
            <img src="/imgs/avatar.jpg" alt="Client" />
            <blockquote>
              Exercit ullamco laboris nisiut aliquip ex ea com irure dolor
              reprehs tempor incididunt ut labore dolore magna aliqua quis
              nostrud sed exercitation ullamco laboris nisiut duis aute irure
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </blockquote>
            <div className="client-name">
              <p>Hans poo</p>
              <span>Client</span>
            </div>
          </div>
          <div className="review">
            <img src="/imgs/avatar.jpg" alt="Client" />
            <blockquote>
              Exercit ullamco laboris nisiut aliquip ex ea com irure dolor
              reprehs tempor incididunt ut labore dolore magna aliqua quis
              nostrud sed exercitation ullamco laboris nisiut duis aute irure
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </blockquote>
            <div className="client-name">
              <p>Lucas poo</p>
              <span>Client</span>
            </div>
          </div>
          <div className="review">
            <img src="/imgs/avatar.jpg" alt="Client" />
            <blockquote>
              Exercit ullamco laboris nisiut aliquip ex ea com irure dolor
              reprehs tempor incididunt ut labore dolore magna aliqua quis
              nostrud sed exercitation ullamco laboris nisiut duis aute irure
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </blockquote>
            <div className="client-name">
              <p>Carlos Calderon</p>
              <span>Client</span>
            </div>
          </div>
          <div className="review">
            <img src="/imgs/avatar.jpg" alt="Client" />
            <blockquote>
              Exercit ullamco laboris nisiut aliquip ex ea com irure dolor
              reprehs tempor incididunt ut labore dolore magna aliqua quis
              nostrud sed exercitation ullamco laboris nisiut duis aute irure
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </blockquote>
            <div className="client-name">
              <p>Juan Perez</p>
              <span>Client</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
