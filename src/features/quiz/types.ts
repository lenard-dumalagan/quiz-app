export type Quiz = {
  question: string;
  choices: { label: string; value: string }[];
  answer: string;
};
