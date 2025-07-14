type CardProps = {
    value: string;
    flipped: boolean;
    onFlip: () => void;
};

export default function Card({ value, flipped, onFlip }: CardProps) {
    return (
        <div
            onClick={onFlip}
            className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 perspective cursor-pointer"
        >
            <div
                className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${flipped ? "rotate-y-180" : ""
                    }`}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full bg-blue-500 text-white text-3xl rounded-xl flex items-center justify-center backface-hidden shadow-xl">
                    ❓
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-white text-3xl border-2 border-blue-400 rounded-xl flex items-center justify-center rotate-y-180 backface-hidden shadow-xl">
                    {value}
                </div>
            </div>
        </div>
    );
}
