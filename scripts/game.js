/** @format */
// import { questions } from "./select.js";

const body = document.querySelector("body");
const question = document.querySelector(".question");
const choiceContainer = document.querySelector(".choice-container");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const progressBarfull = document.querySelector("#progressBarfull");
const scoreText = document.querySelector("#score");
const boardContainer = document.querySelector(".boardContainer");
const container = document.querySelector(".container");
const code = document.querySelector(".codeContainer");

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestion = [];

const scorePoints = 10;
const maxQuestions = 10;

async function startGame(lang) {
  const langId = lang.id;
  console.log(langId);
  score = 0;
  questionCounter = 1;
  const language = await fetch("../languages.json")
    .then((response) => response.json())
    .then((data) => data[`${langId}`]);
  console.log(language);
  avaliableQuestion = [...language];
  // console.log(avaliableQuestion);
  boardContainer.classList.add("displaynone");
  container.classList.remove("container");
  container.classList.add("displayblock");
  getNewQuestion();
}

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
  code.innerText = currentQuestions.code;
  if (code.innerText != "") code.classList.add("padding");
  else code.classList.remove("padding");
  body.classList.add("HoverBtn");
  choiceContainer.classList.add("choice-container");

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

// startGame();
