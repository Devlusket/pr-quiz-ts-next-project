import type { Question, ResultsMap, RangerColor } from "../types/quiz";

export const questions: Question[] = [
  {
    question: "Qual é sua cor favorita?",
    options: [
      { text: "Vermelho", ranger: "Vermelho" },
      { text: "Azul", ranger: "Azul" },
      { text: "Amarelo", ranger: "Amarelo" },
      { text: "Preto", ranger: "Preto" },
      { text: "Rosa", ranger: "Rosa" },
    ],
  },
  // ...
];

export const resultsMap: ResultsMap = {
  Vermelho: { name: "Red Ranger", image: "/rangers/red.png" },
  Azul: { name: "Blue Ranger", image: "/rangers/blue.jpg" },
  Amarelo: { name: "Yellow Ranger", image: "/rangers/yellow.png" },
  Preto: { name: "Black Ranger", image: "/rangers/black.jpg" },
  Rosa: { name: "Pink Ranger", image: "/rangers/pink.png" },
};
