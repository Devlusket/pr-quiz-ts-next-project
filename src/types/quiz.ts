export type RangerColor = "Vermelho" | "Azul" | "Amarelo" | "Preto" | "Rosa";

export interface Option {
  text: string;
  ranger: RangerColor;
}

export interface Question {
  question: string;
  options: Option[];
  image?: string;
}

export interface Result {
  name: string;
  image: string;
}

export type ResultsMap = Record<RangerColor, Result>;
