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
import { use, useEffect, useId, useState } from "react";
import AnswerOption from "./AnswerOption";

interface QuestionElementProps {
  question: string;
  options: { text: string; isCorrect: boolean }[];
}

export default function QuestionElement({
  question,
  options,
}: QuestionElementProps) {
  const [progress, setProgress] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(0);
  const [timeOut, setTimeOut] = useState(false);

  const handleSelectAnswer = (index: number) => {
    setAnswerSelected(index);
    setIsAnswered(true);
    setProgress(100);

    if (index === -1) {
      setTimeOut(true);
    }
  };

  const checkAnswer = (index: number) => {
    return options[index].isCorrect;
  };

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + 15000; // 15 segundos en milisegundos

    const interval = setInterval(() => {
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
  }, []);

  return (
    <Card component="article" elevation={4} sx={{ mt: 2 }}>
      <CardHeader
        title={
          <Typography variant="h4" component="p" fontWeight="bold">
            Pregunta 1 de 10
          </Typography>
        }
        subheader="Selecciona la respuesta correcta"
      />
      {timeOut && (
        <Typography variant="h6" component="p" align="center" color="error">
          ¡Se acabó el tiempo!
        </Typography>
      )}

      <LinearProgress variant="determinate" value={progress} />

      <CardContent>
        <Typography variant="body1" component="p">
          {question}
        </Typography>
        <Grid
          display="grid"
          gap={2}
          gridTemplateColumns="repeat(2, 1fr)"
          gridTemplateRows="repeat(2, 150px)"
          mt={2}
        >
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
        <Button variant="contained" fullWidth>
          Siguiente
        </Button>
      </CardActions>
    </Card>
  );
}
