/** @format */

const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const languageUsed = localStorage.getItem("languageUsed");
console.log(languageUsed, mostRecentScore);
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const max_high_scores = 5;

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveScoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const score = {
    score: mostRecentScore,
    name: username.value,
    lang: languageUsed,
  };

  highScores.push(score);
  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("highScores.html");
});
