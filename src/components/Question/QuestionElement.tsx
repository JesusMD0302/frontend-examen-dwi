"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import AnswerOption from "./AnswerOption";
import { useAppContext } from "@/hooks/useAppContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface QuestionElementProps {
  currentQuestion: number;
  totalQuestions: number;
  question: string;
  options: Answer[];
  isLastQuestion: boolean;
  isLoading: boolean;
  onNextQuestion: () => void;
}

export default function QuestionElement({
  currentQuestion,
  totalQuestions,
  question,
  options,
  isLastQuestion,
  isLoading,
  onNextQuestion,
}: QuestionElementProps) {
  const [progress, setProgress] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(0);
  const [timeOut, setTimeOut] = useState(false);
  const router = useRouter();

  const { setAnswer, handleFinish } = useAppContext();

  const handleSelectAnswer = (index: number) => {
    setAnswerSelected(index);
    setIsAnswered(true);
    setProgress(100);
    if (index === -1) {
      setTimeOut(true);
      return;
    }

    setAnswer(options[index].isCorrect);
  };

  const checkAnswer = (index: number) => {
    return options[index].isCorrect;
  };

  const handleNextQuestion = () => {
    if (isLastQuestion || isLoading || !isAnswered) {
      return;
    }

    onNextQuestion();
  };

  const handleFinishExam = () => {
    // Finalizar
    handleFinish();
    router.push("/questions/results");
  };

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + 15000; // 15 segundos en milisegundos

    const interval = setInterval(() => {
      if (isAnswered) {
        setProgress(100);
        clearInterval(interval);
        return;
      }

      const now = Date.now();
      const elapsedTime = now - startTime;
      const remainingTime = endTime - now;
      const progressPercent = (elapsedTime / 15000) * 100;

      if (remainingTime <= 0) {
        clearInterval(interval);
        setProgress(100);
      } else {
        setProgress(progressPercent);
      }
    }, 100); // Intervalo de 100 milisegundos para una actualización más suave

    return () => {
      clearInterval(interval);
    };
  }, [isAnswered]);

  useEffect(() => {
    if (progress === 100) {
      if (!isAnswered) {
        handleSelectAnswer(-1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  return (
    <Card component="article" elevation={4} sx={{ mt: 2 }}>
      <CardHeader
        title={
          <Typography variant="h4" component="p" fontWeight="bold">
            Pregunta {currentQuestion} de {totalQuestions}
          </Typography>
        }
        subheader="Selecciona la respuesta correcta"
      />
      <CardContent>
        {timeOut && (
          <Typography variant="h6" component="p" align="center" color="error">
            ¡Se acabó el tiempo!
          </Typography>
        )}
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="body1" component="p" mt={2}>
          {question}
        </Typography>
        <Grid display="grid" gap={2} mt={2}>
          {options.map((option, index) => (
            <Grid item key={option.text} xs={6} sm={3} md={2}>
              <AnswerOption
                answerSelected={answerSelected}
                checkAnswer={checkAnswer}
                index={index}
                isAnswered={isAnswered}
                onSelectAnswer={handleSelectAnswer}
                option={option}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions>
        {isLastQuestion && (
          <Button
            variant="contained"
            fullWidth
            disabled={isLoading || !isAnswered}
            onClick={handleFinishExam}
          >
            Finalizar
          </Button>
        )}
        {!isLastQuestion && (
          <Button
            variant="contained"
            fullWidth
            disabled={isLoading || !isAnswered}
            onClick={handleNextQuestion}
          >
            Siguiente
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
