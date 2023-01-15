import React, { useEffect } from "react";
import { useState } from "react";
import CardView from "./CardView";

//This is the master component
function App() {
  //state to store the current score
  const [score, setScore] = useState(0)

  //state to store the best score
  const [bestScore, setBestScore] = useState(0)

  //state to store the array of cards
  //each card has a name, imgSrc, and description
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


  //raise the score by one
  const incrementScore = () => {
    setScore(score + 1);
  }

  //reset the score to 0 upon losing
  const resetScore = () => {
    setScore(0)
  }

  //update bestScore when score is higher
  useEffect(() => {
    if(score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore])



  //randomize the array of cards and set state
  const randomizeCards = () => {
    const randomized = cards.slice();
    for(let i = randomizeCards.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [randomized[i], randomized[rand]] = [randomized[rand], randomized[i]]
    }
    setCards(randomized);
  }

  //render App
  return (
    <div className="App">
      <div className="scoreboard">
        <div className="score" id="score">Score : {score}</div>
        <div className="score" id="best-score">Best Score : {bestScore}</div>
      </div>
      <CardView cards={cards} randomizeCards={randomizeCards} incrementScore={incrementScore} resetScore={resetScore}/>
    </div>
  );
}

export default App;
