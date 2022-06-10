const body=document.querySelector("body"),question=document.querySelector(".question"),choiceContainer=document.querySelector(".choice-container"),choices=Array.from(document.querySelectorAll(".choice-text")),progressText=document.querySelector("#progressText"),progressBarfull=document.querySelector("#progressBarfull"),scoreText=document.querySelector("#score"),boardContainer=document.querySelector(".boardContainer"),container=document.querySelector(".container"),code=document.querySelector(".codeContainer");let currentQuestions={},acceptingAnswers=!0,score=0,questionCounter=0,avaliableQuestion=[];const scorePoints=10,maxQuestions=10;let langId;async function startGame(a){langId=a.id,console.log(langId),score=0,questionCounter=1;let b=await fetch("./languages.json").then(a=>a.json()).then(a=>a[`${langId}`]);avaliableQuestion=[...b],boardContainer.classList.add("displaynone"),container.classList.remove("container"),container.classList.add("displayblock"),getNewQuestion()}getNewQuestion=()=>{if(0===avaliableQuestion||questionCounter>10)return localStorage.setItem("mostRecentScore",score),localStorage.setItem("languageUsed",langId),window.location.assign("end.html");progressText.innerText=`Question ${questionCounter} of 10`,progressBarfull.style.width=`${questionCounter/10*100}%`,questionCounter++;let a=Math.floor(Math.random()*avaliableQuestion.length);currentQuestions=avaliableQuestion[a],question.innerText=currentQuestions.question,code.innerText=currentQuestions.code,""!=code.innerText?code.classList.add("padding"):code.classList.remove("padding"),body.classList.add("HoverBtn"),choiceContainer.classList.add("choice-container"),choices.forEach(a=>{let b=a.dataset.number;a.innerText=currentQuestions["choice"+b]}),avaliableQuestion.splice(a,1),acceptingAnswers=!0},choices.forEach(a=>{a.addEventListener("click",c=>{if(!acceptingAnswers)return;acceptingAnswers=!1;let a=c.target,d=a.dataset.number,b=d==currentQuestions.answer?"correct":"incorrect";"correct"===b&&incrementScore(10),body.classList.remove("HoverBtn"),a.parentElement.classList.add(b),setTimeout(()=>{a.parentElement.classList.remove(b),getNewQuestion()},1e3)})}),incrementScore=a=>{score+=a,scoreText.innerText=score}
