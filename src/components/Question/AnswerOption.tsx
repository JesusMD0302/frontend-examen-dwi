import { Button } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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
  const commonColor = "#8d8d8d"; // Azul

  return (
    <Button
      variant="contained"
      color="info"
      disabled={isAnswered}
      fullWidth
      sx={{
        height: "100%",
        justifyContent: "space-between",
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
              : commonColor
            : commonColor,
        },
      }}
      onClick={() => onSelectAnswer(index)}
    >
      {option.text}
      {isAnswered ? (
        answerSelected === index ? (
          checkAnswer(answerSelected) ? (
            <CheckCircleOutlineIcon />
          ) : (
            <HighlightOffIcon />
          )
        ) : checkAnswer(index) ? (
          <CheckCircleOutlineIcon />
        ) : undefined
      ) : undefined}
    </Button>
  );
}
