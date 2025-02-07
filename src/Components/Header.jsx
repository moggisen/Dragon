/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./CSS/header.css"; // Din CSS-fil för header
import iconImage from "../assets/dragonIcon.png"; // Importera bilden

function Header({ openQuiz }) {
  return (
    <>
      <header className="header">
        <h1>Välkommen till Drakvärlden</h1>

        <section>
          {/* Eventuell andra bild kan läggas här */}
          <p className="header-description">
            Karaktärer från filmen och deras äventyr i Draktränaren.
          </p>
        </section>

        {/* Knapp för att starta quiz */}
        <button className="quiz-header-button" onClick={openQuiz}>
          Starta Quiz
        </button>
      </header>
    </>
  );
}

export default Header;
