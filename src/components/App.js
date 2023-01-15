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
  //each card has a name, imgSrc, description,
  //and whether or not the card was picked
  const [cards, setCards] = useState([
    {name: "1",
     imgSrc : "1",
     description: "",
     picked: false},
     {name: "2",
     imgSrc : "2",
     description: "",
     picked: false},
     {name: "3",
     imgSrc : "3",
     description: "",
     picked: false},
     {name: "4",
     imgSrc : "4",
     description: "",
     picked: false},
     {name: "5",
     imgSrc : "5",
     description: "",
     picked: false},
     {name: "6",
     imgSrc : "6",
     description: "",
     picked: false},
     {name: "7",
     imgSrc : "7",
     description: "",
     picked: false},
     {name: "8",
     imgSrc : "8",
     description: "",
     picked: false},
     {name: "9",
     imgSrc : "9",
     description: "",
     picked: false},
     {name: "10",
     imgSrc : "10",
     description: "",
     picked: false},
  ])


  //raise the score by one and set 
  //chosen card.picked to true
  const incrementScore = (pickedCard) => {
    const newCards = cards.map(card => {
      if(card.name === pickedCard.name) {
        return {
          name: card.name,
          imgSrc: card.imgSrc,
          description: card.description,
          picked: true
        }
      }
      return card
    })
    setCards(newCards);
    setScore(score + 1);
  }

  //reset the score to 0 upon losing and 
  //set picked to false for all cards
  const resetScore = () => {
    const newCards = cards.map(card => {
      return {
        name: card.name,
        imgSrc: card.imgSrc,
        description: card.description,
        picked: false
      }
    })
    setCards(newCards);
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
    for(let i = randomized.length - 1; i > 0; i--) {
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
