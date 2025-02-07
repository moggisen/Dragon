/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CardContainer from "./Components/CardContainer";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz"; // Importera Quiz-komponenten
import "./index.css"; // Din globala CSS-fil

function App() {
  const [showQuiz, setShowQuiz] = useState(false); // Hanterar visning av quiz-popup

  return (
    <div className="App">
      <Header openQuiz={() => setShowQuiz(true)} /> {/* Passa funktionen till Header */}
      <CardContainer />
      {showQuiz && ( // Visa popup om showQuiz är true
        <div className="quiz-popup">
          <div className="quiz-overlay" onClick={() => setShowQuiz(false)}></div> {/* Klick utanför för att stänga */}
          <div className="quiz-content">
            <button className="quiz-close" onClick={() => setShowQuiz(false)}>
              X
            </button>
            <Quiz />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;