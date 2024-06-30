import QuestionContainer from "@/components/Question/QuestionContainer";
import { Box, Typography } from "@mui/material";

const QUESTIONS = [
  {
    text: "¿Cuál es la capital de Francia?",
    answers: [
      { text: "Madrid", isCorrect: false },
      { text: "Paris", isCorrect: true },
      { text: "Londres", isCorrect: false },
      { text: "Roma", isCorrect: false },
    ],
  },
  {
    text: "¿Cuál es la capital de Italia?",
    answers: [
      { text: "Madrid", isCorrect: false },
      { text: "Paris", isCorrect: false },
      { text: "Londres", isCorrect: false },
      { text: "Roma", isCorrect: true },
    ],
  },
  {
    text: "¿Cuál es la capital de España?",
    answers: [
      { text: "Madrid", isCorrect: true },
      { text: "Paris", isCorrect: false },
      { text: "Londres", isCorrect: false },
      { text: "Roma", isCorrect: false },
    ],
  },
];

export default function Questions() {
  const shuffle = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const questions = QUESTIONS.map((question, index) => ({
    text: question.text,
    answers: shuffle(question.answers),
  }));

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h1" fontWeight="bold">
        Preguntas
      </Typography>
      <QuestionContainer options={QUESTIONS} />
    </Box>
  );
}
