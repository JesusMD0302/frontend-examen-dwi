"use client";
import { useState } from "react";
import QuestionElement from "./QuestionElement";

interface QuestionContainerProps {
  options: {
    text: string;
    answers: { text: string; isCorrect: boolean }[];
  }[];
}

export default function QuestionContainer({ options }: QuestionContainerProps) {
  const [questions, setQuestions] = useState(options);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  return (
    <QuestionElement
      question={questions[0].text}
      options={questions[0].answers}
    />
  );
}
