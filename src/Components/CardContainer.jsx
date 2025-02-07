/* eslint-disable no-unused-vars */
import React from "react";
import ToothlessCard from "./Cards/ToothlessCard";
import LightFuryCard from "./Cards/LightFuryCard";
import HiccupCard from "./Cards/HiccupCard";
import AstridCard from "./Cards/AstridCard";
import StoickCard from "./Cards/StoickCard";
import ValkaCard from "./Cards/ValkaCard";
import "./CSS/CardContainer.css";

function CardContainer() {
  return (
    <div className="card-container">
      <ToothlessCard />
      <LightFuryCard />
      <HiccupCard />
      <AstridCard />
      <StoickCard />
      <ValkaCard />
    </div>
  );
}

export default CardContainer;

//  Importerar kortkomponenterna och CSS-fil för layouten för korten
// Inuti komponenten renderas kortkomponenter inom en div klass card-container, vilket gör att de visas som en grupp på sidan 