import React from "react";

import logo from "../assets/tindev.svg";

function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt=""
          />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>
              CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React
              Native, NodeJS e todo ecossistema em torno dessas tecnologias.
            </p>
          </footer>
        </li>
      </ul>
    </div>
  );
}

export default Main;
