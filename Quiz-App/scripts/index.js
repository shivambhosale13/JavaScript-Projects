import { questions, getCorrectAns } from './question.js';

let currentQuestionIndex = 0;

const questionElement = document.querySelector('.js-question');
const answerContainer = document.querySelector('.js-answer-container');
const nextButton = document.querySelector('.js-next-button');


function showQuestion() {

  const currentQuestion = questions[currentQuestionIndex];

  questionElement.innerHTML = currentQuestion.question;

  answerContainer.innerHTML = '';

  currentQuestion.answer.forEach((option) => {

    const button = document.createElement('button');

    button.classList.add('answer-button');

    button.innerHTML = option.text;

    answerContainer.appendChild(button);

  });

}


nextButton.addEventListener('click', () => {

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }

});


showQuestion();