"use client"

import { RangerColor, resultsMap } from "../data/quizData";

export function calculateResult(answers: RangerColor[]) {
  const count: Partial<Record<RangerColor, number>> = {};

  for (const ranger of answers) {
    count[ranger] = (count[ranger] || 0) + 1;
  }

  const topRanger = Object.entries(count).sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))[0]?.[0] as RangerColor;

  return resultsMap[topRanger] ?? {
    name: "Ranger Desconhecido",
    image: "/rangers/default.png",
  };
}
