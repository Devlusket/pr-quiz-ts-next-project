// "use client"

// import { useState, useEffect } from "react";

// export type RangerColor = "Vermelho" | "Azul" | "Amarelo" | "Preto" | "Rosa";

// interface Option {
//   text: string;
//   ranger: RangerColor;
// }

// interface Question {
//   id: number;
//   question: string;
//   options: Option[];
// }

// interface ResultMap {
//   [key: string]: {
//     name: string;
//     image: string;
//   };
// }

// import QuestionCard from "./QuestionCard";
// import ResultCard from "./ResultCard";

// export default function Quiz() {
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [resultsMap, setResultsMap] = useState<ResultMap>({});
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answers, setAnswers] = useState<RangerColor[]>([]);
//   const [result, setResult] = useState<{ name: string; image: string } | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       const [questionsRes, resultsRes] = await Promise.all([
//         fetch("http://localhost:3001/questions"),
//         fetch("http://localhost:3001/resultsMap"),
//       ]);
//       const questionsData = await questionsRes.json();
//       const resultsData = await resultsRes.json();

//       setQuestions(questionsData);
//       setResultsMap(resultsData);
//       setLoading(false);
//     }
//     fetchData();
//   }, []);

//   function calculateResult(answers: RangerColor[]) {
//     const count: Record<RangerColor, number> = {} as Record<RangerColor, number>;
//     for (const ranger of answers) {
//       count[ranger] = (count[ranger] || 0) + 1;
//     }
//     const topRanger = Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0] as RangerColor;
//     return resultsMap[topRanger] ?? { name: "Ranger Desconhecido", image: "/rangers/default.png" };
//   }

//   const handleAnswer = (option: Option) => {
//     const updatedAnswers = [...answers, option.ranger];
//     if (currentIndex + 1 < questions.length) {
//       setAnswers(updatedAnswers);
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       const finalResult = calculateResult(updatedAnswers);
//       setResult(finalResult);
//     }
//   };

//   const resetQuiz = () => {
//     setCurrentIndex(0);
//     setAnswers([]);
//     setResult(null);
//   };

//   if (loading) return <p className="text-center p-6">Carregando perguntas...</p>;

//   return (
//     <div className="bg-white shadow-xl rounded-2xl p-6 max-w-lg w-full text-center">
//       <h1 className="text-2xl font-bold mb-6 text-red-800">Qual Power Ranger você seria?</h1>
//       {result ? (
//         <ResultCard result={result} onRestart={resetQuiz} />
//       ) : (
//         <QuestionCard
//           question={questions[currentIndex]}
//           onAnswer={handleAnswer}
//           current={currentIndex + 1}
//           total={questions.length}
//         />
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";
import { questions, resultsMap } from "@/data/quizData";
import { RangerColor, Option } from "@/types/quiz";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<RangerColor[]>([]);
  const [result, setResult] = useState<{ name: string; image: string } | null>(null);

  function calculateResult(answers: RangerColor[]) {
    const count: Record<RangerColor, number> = {} as Record<RangerColor, number>;
    for (const ranger of answers) {
      count[ranger] = (count[ranger] || 0) + 1;
    }
    const topRanger = Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0] as RangerColor;
    return resultsMap[topRanger] ?? { name: "Ranger Desconhecido", image: "/rangers/default.png" };
  }

  const handleAnswer = (option: Option) => {
    const updatedAnswers = [...answers, option.ranger];
    if (currentIndex + 1 < questions.length) {
      setAnswers(updatedAnswers);
      setCurrentIndex(currentIndex + 1);
    } else {
      const finalResult = calculateResult(updatedAnswers);
      setResult(finalResult);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 max-w-lg w-full text-center">
      <h1 className="text-2xl font-bold mb-6 text-red-800">Qual Power Ranger você seria?</h1>
      {result ? (
        <ResultCard result={result} onRestart={resetQuiz} />
      ) : (
        <QuestionCard
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
          current={currentIndex + 1}
          total={questions.length}
        />
      )}
    </div>
  );
}

