/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../Modal";
import toothlessImage from "/src/assets/toothless2.jpeg"; // Bild för kortet
import toothlessCardImage from "/src/assets/toothless3.jpeg"; // Bild som visas på pop-upen
import LightNight1 from "/src/assets/LightNight2.jpeg"; // Bild som visas på pop-upen

function ToothlessCard() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Kollar om pop-upen är öppen

  return (
    <>
      <div className="UserCard">
        <img className="userpic1" src={toothlessImage} alt="Toothless" />
        <h2 className="card-title">Toothless</h2>
        <p className="card-text">
          En lojal och mäktig nattfasa som är Hickes bästa vän.
        </p>
        <button className="card-button" onClick={() => setIsModalOpen(true)}>
          Läs mer
        </button>
      </div>
      <Modal
        title="Toothless" // Namnet på karaktären
        // text är en beskrivning om karatären
        // text2 en text rad
        text="Tandlöse är en nattfasa, en av de mest sällsynta och kraftfulla drakarna. Han är lojal, lekfull och intelligent, med ett djupt band till Hicke. Efter att Hicke räddar honom och hjälper honom att flyga igen med en protes, utvecklar de en vänskap som förändrar deras världar. Tandlöse är en mäktig krigare men också en vänlig och nyfiken varelse."
        text2="Sätt musen på bilden och se vad som händer 🤪"
        image1={toothlessCardImage} // Bild 1 som visas i modalen
        image2={LightNight1} // Bild 2 som visas i modalen
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Öppnar om det är true eller stängs om den är false
      />
    </>
  );
}

export default ToothlessCard;
