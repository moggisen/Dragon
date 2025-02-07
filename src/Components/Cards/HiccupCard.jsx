/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../Modal";
import Hiccup from "/src/assets/Hiccup.jpeg"; // Bilden som visas på kortet 
import HiccupCardImge from "/src/assets/Hiccup.jpeg"; // Bild som visas på pop-upen
import toothlessCardImage from "/src/assets/toothless3.jpeg"; // Bild som visas på pop-upen

function HiccupCard() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Kollar om pop-upen är öppen

  return (
    <>
      <section className="UserCard">
        <img className="userpic1" src={Hiccup} alt="Hiccup" />
        <h2 className="card-title">Hicke</h2>
        <p className="card-text">
          En smart och modig ung viking som bygger fred mellan människor och
          drakar.
        </p>
        <button className="card-button" onClick={() => setIsModalOpen(true)}>
          Läs mer
        </button>
      </section>
      <Modal
        title="Hicke (Hiccup Horrendous Haddock III)" // Namnet på karaktären
        // text är en beskrivning om karatären
        // text2 en text rad
        text="Hicke är en smart, modig och empatisk ung viking som skiljer sig från sin stam genom att värdesätta intelligens och samarbete framför våld. 
        Han utvecklas från att vara en osäker outsider till en självsäker ledare som skapar fred mellan människor och drakar. Hans starkaste band är till Tandlöse, 
        en nattfasa som blir hans trogna vän och partner i äventyr."
        text2="Sätt musen på bilden och se vad som händer 🤪"
        image1={HiccupCardImge} // Bild 1 som visas i modalen
        image2={toothlessCardImage} // Bild 2 som visas i modalen
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Öppnar om det är true eller stängs om den är false
      />
    </>
  );
}

export default HiccupCard;
