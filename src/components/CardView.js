import React from "react";

export default function CardView(props) {
    //destructure props
    const {cards, randomizeCards, incrementScore, resetScore} = props;

    //map the cards props to renderable JSX elements
    const cardsToJSX = cards.map(card => {
        return (<div onClick={() => {
            //if card was already
            //picked, reset the score
            if(card.picked) {
                resetScore()
            } else {
                //if card was not picked,
                //incremenet score
                incrementScore(card)
            }
            //regardless, randomize the cards
            randomizeCards()
        }} className="card" key={`card-${card.imgSrc}`}>
            <img src={card.imgSrc} className="card-image" key={`img-${card.imgSrc}`} alt={card.name}></img>
            <div className="card-name" key={`card-${card.name}`}>{card.name}</div>
            <div className="card-description" key={`card-${card.description}`}>{card.description}</div>
        </div>)
    })
    return (
        <div className="CardView">
            {cardsToJSX}
        </div>
    )
}