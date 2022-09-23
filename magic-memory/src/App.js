import './App.css'
import React, { useEffect, useState } from 'react';
import { shuffleCards } from './constans/images';
import Card from './components/Card';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(false);

  const handleChoice = (card) => {
    if (choiceOne) {
      if (choiceOne.id != card.id) {
        setChoiceTwo(card)
      }
    } else {
      setChoiceOne(card);
    }
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card;
            }
          })
        })
        reset();
      } else {
        setTimeout(() => {
          reset();
        }, 700);
      }
    }
  }, [choiceOne, choiceTwo]);

  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns => turns + 1);
    setDisabled(false);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={() => { setCards(shuffleCards()) }}>New Game</button>
      <div>
        <h2>Turns: {turns}</h2>
      </div>
      <div className="card-grid">
        {
          cards.map(card => {
            return (
              <Card key={card.id} card={card} handleClick={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App