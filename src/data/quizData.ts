import type { Question, ResultsMap } from "../types/quiz";

// export const questions: Question[] = [
//   {
//     question: "Qual é sua cor favorita?",
//     options: [
//       { text: "Vermelho", ranger: "Vermelho" },
//       { text: "Azul", ranger: "Azul" },
//       { text: "Amarelo", ranger: "Amarelo" },
//       { text: "Preto", ranger: "Preto" },
//       { text: "Rosa", ranger: "Rosa" },
//     ],
//   },
//   // ...
// ];

export const questions: Question[] = [
  {
    id: 1,
    question: "Qual é sua cor favorita?",
    options: [
      { text: "Vermelho", ranger: "Vermelho" },
      { text: "Azul", ranger: "Azul" },
      { text: "Amarelo", ranger: "Amarelo" },
      { text: "Preto", ranger: "Preto" },
      { text: "Rosa", ranger: "Rosa" }
    ]
    },
    {
      id: 2,
      question: "Qual é seu animal favorito?",
      options: [
        { text: "Leão", ranger: "Vermelho" },
        { text: "Tubarão", ranger: "Azul" },
        { text: "Águia", ranger: "Amarelo" },
        { text: "Lobo", ranger: "Preto" },
        { text: "Gato", ranger: "Rosa" }
      ]
    },
    {
      id: 3,
      question: "Qual é seu superpoder favorito?",
      options: [
        { text: "Força", ranger: "Vermelho" },
        { text: "Velocidade", ranger: "Azul" },
        { text: "Agilidade", ranger: "Amarelo" },
        { text: "Inteligência", ranger: "Preto" },
        { text: "Telepatia", ranger: "Rosa" }
      ]
    },
    {
      id: 4,
      question: "Qual é seu tipo de música favorito?",
      options: [
        { text: "Rock", ranger: "Vermelho" },
        { text: "Pop", ranger: "Azul" },
        { text: "Hip-Hop", ranger: "Amarelo" },
        { text: "Jazz", ranger: "Preto" },
        { text: "Clássica", ranger: "Rosa" }
      ]
    },
    {
      id: 5,
      question: "Qual é seu filme favorito?",
      options: [
        { text: "Ação", ranger: "Vermelho" },
        { text: "Ficção Científica", ranger: "Azul" },
        { text: "Aventura", ranger: "Amarelo" },
        { text: "Terror", ranger: "Preto" },
        { text: "Romance", ranger: "Rosa" }
      ]
    }
  ]

export const resultsMap: ResultsMap = {
  Vermelho: { name: "Red Ranger", image: "/rangers/red.png" },
  Azul: { name: "Blue Ranger", image: "/rangers/blue.jpg" },
  Amarelo: { name: "Yellow Ranger", image: "/rangers/yellow.png" },
  Preto: { name: "Black Ranger", image: "/rangers/black.jpg" },
  Rosa: { name: "Pink Ranger", image: "/rangers/pink.png" },
};
  