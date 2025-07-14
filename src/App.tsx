import { useState } from "react";
import Card from "./Card";

type TCard = {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const emojiList = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥝"];

// Shuffle cards and assign id
const getShuffledCards = (): TCard[] => {
  const cards = [...emojiList, ...emojiList].map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
  return cards.sort(() => Math.random() - 0.5);
};

export default function App() {
  const [cards, setCards] = useState<TCard[]>(getShuffledCards());
  const [flipped, setFlipped] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(false);

  const handleFlip = (index: number) => {
    if (disabled) return;
    if (cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    const newFlipped = [...flipped, index];

    setCards(newCards);
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      const isMatch = newCards[first].value === newCards[second].value;

      if (isMatch) {
        newCards[first].isMatched = true;
        newCards[second].isMatched = true;
        setCards(newCards);
        setFlipped([]);
      } else {
        setDisabled(true);
        setTimeout(() => {
          newCards[first].isFlipped = false;
          newCards[second].isFlipped = false;
          setCards(newCards);
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  const restartGame = () => {
    setCards(getShuffledCards());
    setFlipped([]);
    setDisabled(false);
  };

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-3xl font-bold text-gray-700">Memory Game 🧠</h1>
      <button
        onClick={restartGame}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Restart
      </button>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            value={card.value}
            flipped={card.isFlipped || card.isMatched}
            onFlip={() => handleFlip(index)}
          />
        ))}
      </div>
    </div>
  );
}
