/** @format */

const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const languageUsed = localStorage.getItem("languageUsed");

// highScoresList.innerHTML = highScores
//   .map((score) => {
//     return `<li class="high-score">${score.name} : ${score.score}  in  (${score.lang})</li>`;
//   })
//   .join("");

highScores.forEach((element) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${element.name}</td>
      <td>${element.score}</td>
      <td>${element.lang}</td>
  `;
  highScoresList.append(tr);
});
