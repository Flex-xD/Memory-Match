import { useState } from "react";
import Card from "./Card";

const App = () => {

  const cardSpecs = {
    isFlipped: false,
    value: ""
  }

  type TCardSpecs = {
    isFlipped: boolean,
    value: string
  }

  const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩", "🍌", "🍍", "🍇", "🍈", "🍉", "🍊", "🍋", "🍋‍🟩", "🍌", "🍍"];
  const [cards, setCards] = useState<(TCardSpecs)[]>(fruits.map((fruit , fruitIndex) => (
    {
      isFlipped: false,
      value: fruit , 
      arrayIndex:fruitIndex
    }
  )));

  const handleCardFlip = (cardIndex: number) => {
    const updatedCards = [...cards];
    updatedCards[cardIndex].isFlipped = true;
    setCards(updatedCards);
    console.log(updatedCards);
  }

  // const handlePlayerMove = (CardIndex:number) => {
  //   const updatedCards = [...cards];
  // }

  return (
    <div className="min-h-screen flex justify-center items-center bg-amber-300">
      <div className="h-156 w-3/6 border bg-gray-100 grid grid-rows-4 grid-cols-4 place-items-center">
        {
          cards.map((_, CardIndex) => (
            <Card
              flipped={cards[CardIndex].isFlipped}
              CardIndex={CardIndex}
              value={cards[CardIndex].value}
              handleCardFlip={() => handleCardFlip(CardIndex)} />
          ))
        }
      </div>
    </div>
  )
}

export default App;