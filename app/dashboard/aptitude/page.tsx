"use client";

import { useState } from "react";

const questions = [
  {
    question: "What is 10 + 10?",
    options: ["10", "20", "30", "40"],
    answer: "20",
  },
];

export default function AptitudePage() {
  const [score, setScore] = useState(0);

  const checkAnswer = (option: string) => {
    if (option === questions[0].answer) {
      setScore(score + 1);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Aptitude Quiz
      </h1>

      <div className="bg-zinc-900 p-6 rounded-2xl">
        <h2 className="text-2xl mb-6">
          {questions[0].question}
        </h2>

        <div className="grid gap-4">
          {questions[0].options.map((option) => (
            <button
              key={option}
              onClick={() => checkAnswer(option)}
              className="bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-xl">
        Score: {score}
      </p>
    </div>
  );
}