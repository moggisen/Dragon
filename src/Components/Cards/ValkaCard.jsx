/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../Modal";
import valkaImage from "/src/assets/valka.jpeg"; // Bilden som visas på kortet 
import valkaCardImage from "/src/assets/valka2.jpeg"; // Bild som visas på pop-upen
import ValkaHiccup from "/src/assets/ValkaHiccup.jpeg"; // Bild som visas på pop-upen

function ValkaCard() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Kollar om pop-upen är öppen

  return (
    <>
      <div className="UserCard">
        <img className="userpic1" src={valkaImage} alt="Toothless" />
        <h2 className="card-title">Valka</h2>
        <p className="card-text">
          Hickes mamma som är en vis och passionerad drakskyddare.
        </p>
        <button className="card-button" onClick={() => setIsModalOpen(true)}>
          Läs mer
        </button>
      </div>
      <Modal
        title="Valka" // Namnet på karaktären
        // text är en beskrivning om karatären
        // text2 en text rad
        text="Toothless är den enda kända överlevande Nattfasan och Hiccups bästa vän. Han är modig, lojal och en fantastisk flygare."
        text2="Sätt musen på bilden och se vad som händer 🤪"
        image1={valkaCardImage} // Bild 1 som visas i modalen
        image2={ValkaHiccup} // Bild 2 som visas i modalen
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Öppnar om det är true eller stängs om den är false
      />
    </>
  );
}

export default ValkaCard;
