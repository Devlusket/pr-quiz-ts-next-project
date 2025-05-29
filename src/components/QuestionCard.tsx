"use client";

import { useEffect, useState } from "react";
import type { Question, Option } from "../types/quiz";

type Props = {
  question: Question;
  onAnswer: (option: Option) => void;
  current: number;
  total: number;
};


export default function QuestionCard({ question, onAnswer, current, total }: Props) {
  const [shuffledOptions, setShuffledOptions] = useState<Option[]>([]);

  useEffect(() => {
    const shuffled = [...question.options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  }, [question]);

  return (
    <div>
      {question.image && (
        <img
          src={question.image}
          alt="Imagem da pergunta"
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      <h2 className="text-xl font-semibold mb-2">
        Pergunta {current} de {total}
      </h2>
      <p className="text-lg font-medium mb-4">{question.question}</p>
      <div className="grid gap-2">
        {shuffledOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
