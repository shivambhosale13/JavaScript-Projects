export const questions = [
  {
    question: 'Which is largest animal in the world?',
    answer: [
      { text: 'Shark', correct: false },
      { text: 'Blue Whale', correct: true },
      { text: 'Elephant', correct: false },
      { text: 'Giraffe', correct: false }
    ]
  },

  {
    question: 'Which is smallest country in the world?',
    answer: [
      { text: 'Vatican City', correct: true },
      { text: 'Bhutan', correct: false },
      { text: 'Nepal', correct: false },
      { text: 'Sri Lanka', correct: false }
    ]
  },

  {
    question: 'Which is largest desert in the world?',
    answer: [
      { text: 'Gobi', correct: false },
      { text: 'Kalahari', correct: false },
      { text: 'Sahara', correct: true },
      { text: 'Antarctica', correct: false }
    ]
  },

  {
    question: 'Which is smallest continent in the world?',
    answer: [
      { text: 'Asia', correct: false },
      { text: 'Australia', correct: true },
      { text: 'Europe', correct: false },
      { text: 'Africa', correct: false }
    ]
  }
];


export function getCorrectAns(questionIndex) {
  const question = questions[questionIndex];

  const correctAnswer = question.answer.find((option) => {
    return option.correct;
  });

  return correctAnswer.text;
}