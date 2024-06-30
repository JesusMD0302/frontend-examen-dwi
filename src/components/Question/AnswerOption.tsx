import { Button } from "@mui/material";
import React from "react";

interface AnswerOptionProps {
  isAnswered: boolean;
  answerSelected: number;
  index: number;
  option: { text: string; isCorrect: boolean };
  onSelectAnswer: (index: number) => void;
  checkAnswer: (index: number) => boolean;
}

export default function AnswerOption({
  isAnswered,
  answerSelected,
  index,
  option,
  onSelectAnswer,
  checkAnswer,
}: AnswerOptionProps) {
  // Define los colores personalizados
  const successColor = "#4caf50"; // Verde
  const errorColor = "#f44336"; // Rojo
  const infoColor = "#0288d1"; // Azul

  return (
    <Button
      variant="contained"
      color="info"
      disabled={isAnswered}
      fullWidth
      sx={{
        height: "100%",
        // Aplica estilos para el botón deshabilitado
        ":disabled": {
          color: "white",
          backgroundColor: isAnswered
            ? answerSelected === index
              ? checkAnswer(answerSelected)
                ? successColor
                : errorColor
              : checkAnswer(index)
              ? successColor
              : infoColor
            : infoColor,
        },
      }}
      onClick={() => onSelectAnswer(index)}
    >
      {option.text}
    </Button>
  );
}
