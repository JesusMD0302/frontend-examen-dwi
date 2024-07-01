"use client";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import QuestionElement from "./QuestionElement";

interface QuestionContainerProps {
  options: {
    text: string;
    answers: { text: string; isCorrect: boolean }[];
  }[];
}

export default function QuestionContainer({ options }: QuestionContainerProps) {
  const [questions, setQuestions] = useState(options);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  const handleNextQuestion = () => {
    setIsLoading(true);
    const nextIndex = currentQuestion + 1;

    setCurrentQuestion(nextIndex);
    if (nextIndex + 1 === questions.length) {
      setIsLastQuestion(true);
      return;
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, [currentQuestion]);

  return (
    <>
      {isLoading && <CircularProgress color="info" />}
      {!isLoading && (
        <QuestionElement
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
          question={questions[currentQuestion].text}
          options={questions[currentQuestion].answers}
          isLastQuestion={isLastQuestion}
          isLoading={isLoading}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </>
  );
}
