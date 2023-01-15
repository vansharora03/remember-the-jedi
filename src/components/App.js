import React from "react";
import { useState } from "react";

function App() {
  //state to store the current score
  const [score, setScore] = useState(0)

  //state to store the best score
  const [bestScore, setBestScore] = useState(0)

  //state to store the array of cards
  const [cards, setCards] = useState([
    {name: "",
     imgSrc : "",
     description: ""},
     {name: "",
     imgSrc : "",
     description: ""},
     {name: "",
     imgSrc : "",
     description: ""},
     {name: "",
     imgSrc : "",
     description: ""},
     {name: "",
     imgSrc : "",
     description: ""},
     {name: "",
     imgSrc : "",
     description: ""},
     {name: "",
     imgSrc : "",
     description: ""},
     {name: "",
     imgSrc : "",
     description: ""},
     {name: "",
     imgSrc : "",
     description: ""},
     {name: "",
     imgSrc : "",
     description: ""},
  ])

  const randomizeCards = () => {
    const randomized = cards.slice();
    for(let i = randomizeCards.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [randomized[i], randomized[rand]] = [randomized[rand], randomized[i]]
    }
    setCards(randomized);
  }

  return (
    <div className="App">
      <div className="score" id="score">Score : {score}</div>
      <div className="score" id="best-score">Best Score : {bestScore}</div>
    </div>
  );
}

export default App;
