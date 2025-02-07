/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../Modal";
import Stoick from "/src/assets/Stoick.jpeg";
import StoickCardImage from "/src/assets/stoick2.jpeg"; // Bild som visas på pop-upen
import StoickHiccupImage from "/src/assets/StoickHiccup.jpeg"; // Bild som visas på pop-upen

function StoickCard() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Kollar om pop-upen är öppen

  return (
    <>
      <div className="UserCard">
        <img className="userpic1" src={Stoick} alt="Stoick" />
        <h2 className="card-title">Stoick</h2>
        <p className="card-text">
          En stark hövding och Hickes far som lär sig att acceptera drakar.
        </p>
        <button className="card-button" onClick={() => setIsModalOpen(true)}>
          Läs mer
        </button>
      </div>
      <Modal
        title="Stoick the Vast (Tryggvåld)" // Namnet på karaktären
        // text är en beskrivning om karatären
        // text2 en text rad
        text="Stoick är Berks hövding och Hickes far. Han är en stark, traditionell ledare som till en början är skeptisk till drakar. 
        Men hans kärlek till Hicke och hans vilja att göra det som är bäst för sitt folk gör att han förändras och accepterar drakarna som allierade. 
        Hans drake, Skullcrusher, är en robust rammare som matchar hans kraft och auktoritet."
        text2="Sätt musen på bilden och se vad som händer 🤪"
        image1={StoickCardImage} // Bild 1 som visas i modalen
        image2={StoickHiccupImage} // Bild 2 som visas i modalen
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Öppnar om det är true eller stängs om den är false
      />
    </>
  );
}

export default StoickCard;
