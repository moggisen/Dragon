/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import questions from "../data/Questions.json"; // Importerar frågorna från extern JSON-fil
import "./CSS/Quiz.css"; // Stylingen för frågorna

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Håller reda på vilken fråga som visas
  const [score, setScore] = useState(0); // Håller koll på hur rätt användaren har
  const [showResult, setShowResult] = useState(false); // Visar resultatet när man svarat på alla frågor
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Håller koll på vilket svarsalternativ användaren har valt
  const [shuffledQuestions, setShuffledQuestions] = useState([]); // Håller koll på de slumpade frågorna

  // Funktion för att slumpa frågorna
  const shuffleQuestions = (questions) => {
    const shuffled = [...questions]; // Skapar en kopia av frågorna för att inte ändra originalet
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Slumpar en indexplats
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Byter plats på två element
    }
    return shuffled; // Returnerar de slumpade frågorna
  };

  // Körs när komponenten laddas första gången
  useEffect(() => {
    const randomizedQuestions = shuffleQuestions(questions); // Slumpar frågorna vid start
    setShuffledQuestions(randomizedQuestions); // Sparar de slumpade frågorna i state
  }, []); // Körs bara en gång, vid första renderingen

  // Funktion som hanterar när användaren klickar på ett svar
  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption); // Sätter det valda svaret

    // Kontrollera om användaren svarat rätt
    if (selectedOption === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1); // Ökar poängen med 1 om svaret är rätt
    }

    // Visa nästa fråga efter en kort fördröjning
    setTimeout(() => {
      if (currentQuestion + 1 < shuffledQuestions.length) {
        setCurrentQuestion(currentQuestion + 1); // Går till nästa fråga om det finns fler
        setSelectedAnswer(null); // Återställ val för nästa fråga
      } else {
        setShowResult(true); // Visar resultatet om det var sista frågan
      }
    }, 1000); // Vänta 1 sekund innan nästa fråga
  };

  // Funktion för att återställa quizet och börja om
  const resetQuiz = () => {
    setCurrentQuestion(0); // Sätter tillbaka frågeräknaren till 0
    setScore(0); // Återställ poängen
    setShowResult(false); // Döljer resultatskärmen
    setSelectedAnswer(null); // Återställ val av svar
    const randomizedQuestions = shuffleQuestions(questions); // Slumpar frågorna på nytt
    setShuffledQuestions(randomizedQuestions); // Sparar de nya slumpade frågorna i state
  };

  return (
    <div className="quiz-container">
      {/* Progress bar*/}
      <div className="quiz-progress-bar">
        <div
          className="quiz-progress"
          style={{
            width: `${
              ((currentQuestion + 1) / shuffledQuestions.length) * 100 // den aktuella frågan - De totala antal frågor - visar procent baserat på vilken fråga man är på och av hur många
            }%`,
          }}
        ></div>
      </div>

      {showResult ? ( // "terany operator" används för att antingen visa resultat delen eller frågedelen beroende på om användaren är klar eller inte
        <div className="quiz-result">
          <h2>Quiz Slut!</h2>
          <p>
            Du fick {score} av {shuffledQuestions.length} rätt! {/* Visar hur många rätt användaren fick av antal frågor */}
          </p>
          <button onClick={resetQuiz} className="quiz-button">
            Spela igen
          </button>
        </div>
      ) : (
        <div className="quiz-question">
          {/* Visar vilken fråga man är på */}
          <p className="quiz-counter">
            Fråga {currentQuestion + 1} av {shuffledQuestions.length} {/* visar texten Fråga 3 av 15 tillexempel +1 för att det börjar på 1 och inte 0 */}
          </p>
          <h2>{shuffledQuestions[currentQuestion]?.question}</h2>
          <div className="quiz-options">
            {shuffledQuestions[currentQuestion]?.options.map(
              (option, index) => {
                let optionClass = "quiz-option";
                if (selectedAnswer) {
                  if (option === shuffledQuestions[currentQuestion].answer) {
                    optionClass += " correct";
                  } else if (option === selectedAnswer) {
                    optionClass += " wrong";
                  }
                }
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={optionClass}
                    disabled={!!selectedAnswer}
                  >
                    {option}
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
