type Answer = {
  text: string;
  isCorrect: boolean;
};

type Question = {
  text: string;
  answers: Answer[];
};
