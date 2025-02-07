/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../Modal";
import LightFuryImage from "/src/assets/LightFury.jpeg"; // Bilden som visas på kortet
import LightFuryCardImage from "/src/assets/LightFury2.jpeg"; // Bild som visas på pop-upen
import LightNight from "/src/assets/lightNight.jpeg"; // Bild som visas på pop-upen

function ToothlessCard() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Kollar om pop-upen är öppen

  return (
    <>
      <div className="UserCard">
        <img className="userpic1" src={LightFuryImage} alt="Toothless" />
        <h2 className="card-title">Zarina</h2>
        <p className="card-text">
          En elegant och mystisk drake som blir Tandlöses partner.
        </p>
        <button className="card-button" onClick={() => setIsModalOpen(true)}>
          Läs mer
        </button>
      </div>
      <Modal
        title="Zarina (Light Fury)" // Namnet på karaktären
        // text är en beskrivning om karatären
        // text2 en text rad
        text="Light Fury är en vit, elegant och mystisk drake som introduceras i Draktränaren 3: 
        Det gömda riket. Hon liknar Tandlöse men har en mer strömlinjeformad kropp och kan försvinna genom att använda sitt glänsande skinn för att reflektera ljus. 
        Hon är självständig och försiktig, men utvecklar snabbt ett nära band till Tandlöse och hjälper honom att finna sitt öde."
        text2="Sätt musen på bilden och se vad som händer 🤪"
        image1={LightFuryCardImage} // Bild 1 som visas i modalen
        image2={LightNight} // Bild 2 som visas i modalen
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Öppnar om det är true eller stängs om den är false
        
      />
    </>
  );
}

export default ToothlessCard;
