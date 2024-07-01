import QuestionContainer from "@/components/Question/QuestionContainer";
import { getQuestions } from "@/services/api";
import { Box, Typography } from "@mui/material";

export default async function Questions() {
  const questions = await getQuestions();

  const shuffle = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const newQuestions = questions.map((question, index) => ({
    text: question.text,
    answers: shuffle(question.answers),
  }));

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h1" fontWeight="bold">
        Preguntas
      </Typography>
      <QuestionContainer options={newQuestions} />
    </Box>
  );
}
