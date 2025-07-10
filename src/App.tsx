import { useState } from "react";
import Card from "./Card";

const App = () => {

  type TCardSpecs = {
    isFlipped: boolean,
    value: string
  }

  const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩", "🍌", "🍍", "🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩", "🍌", "🍍"];
  const [cards, setCards] = useState<(TCardSpecs)[]>(fruits.map((fruit, fruitIndex) => (
    {
      isFlipped: false,
      value: fruit,
      arrayIndex: fruitIndex,
      isMatched: false
    }
  )));

  const handleCardFlip = (cardIndex: number) => {
    const updatedCards = [...cards];
    const clickedCard = updatedCards[cardIndex];
    clickedCard.isFlipped = !updatedCards[cardIndex].isFlipped;

    // ? THINGS I HAVE TOD DO:
    // 1. Check whether the Card already has a match and both cards are flipped , then return and let them both be flipped;
    for (let i = 0; i < updatedCards.length; i++) {
      if (i !== cardIndex && clickedCard.isFlipped === true && clickedCard.value === updatedCards[i].value) {
        if (updatedCards[i].isFlipped) {
          alert("Your cards matched !")
          
        }
      }
    }
    // 2. If 2nd flipped Card dosen't match then , unflip the both cards


    setCards(updatedCards);
  }


  return (
    <div className="min-h-screen flex justify-center items-center bg-amber-300">
      <div className="h-156 w-3/6 border bg-gray-100 grid grid-rows-4 grid-cols-4 place-items-center">
        {
          cards.map((_, CardIndex) => (
            <Card
              key={CardIndex}
              flipped={cards[CardIndex].isFlipped}
              CardIndex={CardIndex}
              value={cards[CardIndex].value}
              handleCardFlip={() => handleCardFlip(CardIndex)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App;