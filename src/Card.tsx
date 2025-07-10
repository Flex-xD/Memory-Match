
type CardProps = {
    value: string;
    CardIndex: number
    handleCardFlip: (key: number) => void;
    flipped?: boolean
};

export default function Card(props: CardProps) {
    const { CardIndex, value, flipped = false, handleCardFlip } = props

    return (
        <div
            onClick={() => handleCardFlip(CardIndex)}
            className="w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 perspective cursor-pointer"
        >
            <div
                className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${flipped ? "rotate-y-180" : ""
                    }`}
            >
                {/* Front (hidden side) */}
                <div className="absolute w-full h-full bg-blue-500 rounded-xl text-white flex items-center justify-center backface-hidden">
                    ❓
                </div>

                {/* Back (visible on flip) */}
                <div className="absolute w-full h-full bg-white border-2 border-blue-400 rounded-xl text-3xl flex items-center justify-center rotate-y-180 backface-hidden">
                    {value}
                </div>
            </div>
        </div>
    );
}
