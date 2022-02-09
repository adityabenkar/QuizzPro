/** @format */
const body = document.querySelector("body");
const question = document.querySelector(".question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const progressBarfull = document.querySelector("#progressBarfull");
const scoreText = document.querySelector("#score");

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestion = [];

let questions = [
  {
    question: "What is C++ ?",
    choice1: "C++ is an object oriented programming language",
    choice2: "C++ is a procedural programming language",
    choice3:
      "C++ supports both procedural and object oriented programming language",
    choice4: "C++ is a functional programming language",
    answer: 3,
  },
  {
    question:
      "Which of the following is the correct syntax of including a user defined header files in C++ ?",
    choice1: "#include [userdefined]",
    choice2: "#include “userdefined”",
    choice3: "#include <userdefined.h>",
    choice4: "#include <userdefined.h>",
    answer: 2,
  },
  {
    question:
      "Which of the following user-defined header file extension used in c++?",
    choice1: "hg",
    choice2: "c",
    choice3: "hf",
    choice4: "cpp",
    answer: 4,
  },
  {
    question:
      "Which of the following user-defined header file extension used in c++ ?",
    choice1: "Friend constructor",
    choice2: "Default constructor",
    choice3: "Parameterized constructor",
    choice4: "Copy constructor",
    answer: 1,
  },
  {
    question: "Which of the following correctly declares an array in C++ ?",
    choice1: "array{10};",
    choice2: "array array[10];",
    choice3: "int array;",
    choice4: "int array[10];",
    answer: 4,
  },
];

const scorePoints = 20;
const maxQuestions = 5;

startGame = () => {
  score = 0;
  questionCounter = 1;
  avaliableQuestion = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (avaliableQuestion === 0 || questionCounter > maxQuestions) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }

  progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`;
  progressBarfull.style.width = `${(questionCounter / maxQuestions) * 100}%`;
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * avaliableQuestion.length);
  currentQuestions = avaliableQuestion[questionIndex];
  question.innerText = currentQuestions.question;
  body.classList.add("HoverBtn");

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestions["choice" + number];
  });

  avaliableQuestion.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const classToApply =
      selectedAnswer == currentQuestions.answer ? "correct" : "incorrect";

    if (classToApply === "correct") incrementScore(scorePoints);

    body.classList.remove("HoverBtn");
    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
