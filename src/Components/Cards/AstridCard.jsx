/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../Modal";
import Astrid from "/src/assets/astrid.jpeg"; // Bild för kortet
import AstridCardImage from "/src/assets/astrid2.jpeg"; // Bild som visas på pop-upen
import HiccupAstridImage from "/src/assets/hiccupAstrid.jpeg"; // Bild som visas på pop-upen

function AstridCard() {
  const [isModalOpen, setIsModalOpen] = useState(false); //Kollar om pop-upen är öppen

  return (
    <>
      <div className="UserCard">
        <img className="userpic1" src={Astrid} alt="Astrid" />
        <h2 className="card-title">Astrid</h2>
        <p className="card-text">
          En modig och skicklig krigare som är Hickes partner och stöd.
        </p>
        <button className="card-button" onClick={() => setIsModalOpen(true)}>
          Läs mer
        </button>
      </div>
      <Modal
        title="Astrid Hofferson" // Namnet på karaktären
        // text är en beskrivning om karatären
        // text2 en text rad
        text="Astrid är en modig och beslutsam krigare som alltid kämpar för det hon tror är rätt. 
        Hon är Hickes största stöd och hjälper honom att leda både deras vänner och deras stam. 
        Astrid är också en skicklig drakryttare och rider Stormfly, en dödsstjärna som är lika snabb och skarp som hon själv."
        text2="Sätt musen på bilden och se vad som händer 🤪"
        image1={AstridCardImage} // Bild 1 som visas i modalen
        image2={HiccupAstridImage} // Bild 2 som visas i modalen
        isOpen={isModalOpen} //
        onClose={() => setIsModalOpen(false)} // Kollar att modalen stängs när man klickar på knappen
      />
    </>
  );
}

export default AstridCard;
