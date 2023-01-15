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
    {name: "Luke Skywalker",
     imgSrc : "1",
     description: `"I'm Luke Skywalker. I'm here to rescue you."`,
     picked: false},
     {name: "Yoda",
     imgSrc : "2",
     description: `"No! Try not. Do. Or do not. 
     There is no try."`,
     picked: false},
     {name: "Anakin Skywalker",
     imgSrc : "3",
     description: `I see through the lies of the Jedi.`,
     picked: false},
     {name: "Obi-Wan Kenobi",
     imgSrc : "4",
     description: `"I have the high ground."`,
     picked: false},
     {name: "Mace Windu",
     imgSrc : "5",
     description: `"This party's over."`,
     picked: false},
     {name: "Ahsoka Tano",
     imgSrc : "6",
     description: `"I like firsts. Good or bad 
     they're always memorable."`,
     picked: false},
     {name: "Boba Fett",
     imgSrc : "7",
     description: `"Jabba ruled with fear. I intend to rule with respect."`,
     picked: false},
     {name: "Chewbacca",
     imgSrc : "8",
     description: `"WWWRRRRRRGWWWRRRR."`,
     picked: false},
     {name: "Han Solo",
     imgSrc : "9",
     description: `"Never tell me the odds!"`,
     picked: false},
     {name: "Jar Jar Binks",
     imgSrc : "10",
     description: `"Wesa got a grand army. 
     That’s why you no liking us mesa tinks."`,
     picked: false},
  ])


  //raise the score by one and set 
  //chosen card.picked to true
  const incrementScore = (pickedCard) => {
    const newCards = cards.map(card => {
      if(card.name === pickedCard.name) {
        card.picked = true;
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
      card.picked = false;
      return card;
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
