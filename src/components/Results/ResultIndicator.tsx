"use client";

import { useAppContext } from "@/hooks/useAppContext";
import { Typography } from "@mui/material";

export default function ResultIndicator() {
  const { counter, answers } = useAppContext();
  const totalQuestions = answers.length;

  return (
    <Typography variant="h6" component="p" align="center">
      {counter >= 8
        ? "¡Felicitaciones! 🎉"
        : counter >= 5
        ? "Que bien 😎"
        : counter >= 1
        ? "Hay que estudiar 😅"
        : "Lo siento 😔"}
      , conseguiste {counter} de {totalQuestions} preguntas correctas
    </Typography>
  );
}
