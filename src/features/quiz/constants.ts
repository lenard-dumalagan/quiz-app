import type { Quiz } from './types';

export const QUESTIONS: Quiz[] = [
  {
    question:
      '1. Which of the following best describes the purpose of the syntax checker app?',
    choices: [
      {
        label: 'A. To execute student code and display program output',
        value: 'A',
      },
      {
        label: 'B. To identify and highlight syntax errors in code submissions',
        value: 'B',
      },
      {
        label: 'C. To grade students automatically based on logic correctness',
        value: 'C',
      },
      {
        label: 'D. To translate code into another programming language',
        value: 'D',
      },
    ],
    answer: 'B',
  },
  {
    question:
      '2. Which programming languages are supported by the syntax checker?',
    choices: [
      {
        label: 'A. Python, JavaScript, Java',
        value: 'A',
      },
      {
        label: 'B. Python, C, C++',
        value: 'B',
      },
      {
        label: 'C. HTML, CSS, JavaScript',
        value: 'C',
      },
      {
        label: 'D. Ruby, PHP, Go',
        value: 'D',
      },
    ],
    answer: 'A',
  },
  {
    question:
      '3. When an educator pastes student code into the app, what type of feedback is provided?',
    choices: [
      {
        label: 'A. Logic explanation of the program',
        value: 'A',
      },
      {
        label: 'B. Syntax error details and error location',
        value: 'B',
      },
      {
        label: 'C. Visual diagrams of the program',
        value: 'C',
      },
      {
        label: 'D. Automatic score calculation',
        value: 'D',
      },
    ],
    answer: 'B',
  },
  {
    question:
      '4. The syntax checker app requires users to install external libraries before using it.',
    choices: [
      {
        label: 'true',
        value: 'true',
      },
      {
        label: 'false',
        value: 'false',
      },
    ],
    answer: 'false',
  },
  {
    question:
      '5. The app’s user interface is designed to be simple and accessible for non-technical users.',
    choices: [
      {
        label: 'true',
        value: 'true',
      },
      {
        label: 'false',
        value: 'false',
      },
    ],
    answer: 'true',
  },
];
