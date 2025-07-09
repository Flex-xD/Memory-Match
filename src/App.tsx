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
    updatedCards[cardIndex].isFlipped = true;
    setCards(updatedCards);
    console.log(updatedCards);
  }

  const handleCardMatch = (cardIndex: number) => {
    const updatedCards = [...cards];
    const clickedCard = updatedCards[cardIndex];
    if (clickedCard.isFlipped == false) return;
      let i: number = 0;
    while (i < cards.length) {
      if (clickedCard.value === updatedCards[i].value && clickedCard.isFlipped === true && updatedCards[i].isFlipped === false) {
        clickedCard.isFlipped = true;
        updatedCards[i].isFlipped = true;
        alert("Cards Have been matched")
        return;
      }
      i++;
    }
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
              handleCardMatch={() => handleCardMatch(CardIndex)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App;